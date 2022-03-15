import validator from 'validator'

type FieldType = {
  key: string
  defaultValue?: Date | string | number | null | undefined | boolean
  useGetAllMethod?: boolean
  compose?: (value: unknown) => unknown
}

export function getFormData<FormDataType>(formData: FormData, fields: Array<FieldType>) {
  const result: Partial<{ [key: string]: unknown }> = {}

  fields.forEach((field) => {
    const useGetAllMethod = field.useGetAllMethod ?? false

    const value = useGetAllMethod ? formData.getAll(field.key) : String(formData.get(field.key))

    const isArray = Array.isArray(value)

    if (value === 'null' || value === 'undefined') {
      result[field.key] = field.defaultValue ?? null
      return
    }

    if (!isArray && validator.isBoolean(value)) {
      result[field.key] = composeToBoolean(value)
      return
    }

    result[field.key] = typeof field.compose === 'function' ? field.compose(value) : value
  })

  return result as FormDataType
}

export function getFinalFormData<FormDataType>(
  values: FormDataType,
  fields: {
    [key: string]: string[]
  },
) {
  const result: Partial<{
    [key in keyof FormDataType]: { invalid: boolean; errorMessage: string; value: unknown }
  }> = {}

  const keys = Object.keys(values) as Array<keyof typeof values>

  keys.forEach((field) => {
    const isInvalidField = (
      fields as {
        [key in keyof FormDataType]: string[]
      }
    )[field] as Array<string> | null | undefined

    const errorMessage = Array.isArray(isInvalidField) ? isInvalidField[0] ?? '' : ''

    result[field] = {
      value: values[field],
      invalid: Boolean(errorMessage),
      errorMessage,
    }
  })

  return result
}

export const composeToBoolean = (value: unknown, defaultValue?: boolean) => {
  const isBoolean = value === 'true' || value === 'false'

  if (!isBoolean && (defaultValue === true || defaultValue === false)) {
    return defaultValue
  }

  return value === 'true' ? true : false
}

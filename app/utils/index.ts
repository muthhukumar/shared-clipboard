export function formatFieldErrors(fieldErrors: Record<string, Array<string>>) {
  const result: Record<keyof typeof fieldErrors, string> = {}

  Object.keys(fieldErrors).forEach((field) => {
    result[field] = fieldErrors[field][0]
  })

  return result
}

export function formatFieldErrorsNew(
  fields: Record<string, unknown>,
  fieldErrors: Record<string, Array<string>>,
) {
  const result: Record<string, { message: string; isInvalid: boolean }> = {}

  Object.keys(fields).forEach((key) => {
    if (fieldErrors[key]) {
      result[key] = {
        message: fieldErrors[key][0],
        isInvalid: true,
      }
    } else {
      result[key] = {
        message: '',
        isInvalid: false,
      }
    }
  })

  return result
}

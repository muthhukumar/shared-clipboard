export type ActionType<SchemaType> = {
  [key in keyof SchemaType]?: {
    value?: SchemaType[key]
    invalid?: boolean
    errorMessage?: string | ''
  }
}

export type FormPropsType<SchemaType> = {
  [key in keyof SchemaType]?: {
    value?: SchemaType[key]
    invalid?: boolean
    errorMessage?: string | ''
  }
}

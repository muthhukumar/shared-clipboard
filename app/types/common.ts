export type ActionType<SchemaType> = {
  [key in keyof SchemaType]: {
    value: SchemaType[key]
    errorMessage: string | ''
    invalid: boolean
  }
}

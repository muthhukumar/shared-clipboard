export const copyToClipboard = (data: string, successCallback?: (string: string) => void): void => {
  if (typeof window === 'undefined') {
    throw new Error('`copyToClipboard` should be used in the browser environment')
  }

  try {
    navigator.clipboard.writeText(data)
    if (successCallback) successCallback(data)
  } catch {
    return
  }
}

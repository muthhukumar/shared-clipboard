import { Transition } from '@remix-run/react/transition'
import moment from 'moment'

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

export const getTransitionTypes = (transition: Transition) => {
  if (transition.state === 'submitting' && transition.submission.method === 'GET') {
    return 'Searching'
  }

  if (transition.state === 'submitting' && transition.type === 'actionSubmission') {
    return 'Submitting'
  }

  if (transition.state === 'loading' && transition.type === 'normalLoad') {
    return 'Navigating'
  }

  if (transition.state === 'loading' && transition.type === 'actionRedirect') {
    return 'Redirecting'
  }

  if (transition.state === 'loading' && transition.type === 'normalRedirect') {
    return 'NormalRedirecting'
  }

  if (transition.state === 'loading' && transition.type === 'actionReload') {
    return 'Reloading'
  }

  if (transition.state === 'idle') {
    return 'Idle'
  }

  return 'Unknown'
}

export const getToday = () => {
  return moment().format('YYYY-MM-DD')
}

export const composeUrl = (url: URL) => {
  const protocol = url.protocol?.includes('localhost') ? 'http' : 'https'

  const host = url.protocol?.includes('localhost') ? 'localhost:' : url.host

  return `${protocol}://${host}${url.pathname}`
}

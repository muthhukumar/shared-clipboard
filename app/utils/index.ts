import { Priority } from '@prisma/client'
import { Transition } from '@remix-run/react/transition'
import moment from 'moment'
import { Params } from 'react-router'

// TODO - After refactoring check whether we are using this some where if not then just remove it.
export function formatFieldErrors(fieldErrors: Record<string, Array<string>>) {
  const result: Record<keyof typeof fieldErrors, string> = {}

  Object.keys(fieldErrors).forEach((field) => {
    result[field] = fieldErrors[field][0]
  })

  return result
}

// TODO - After refactoring check whether we are using this some where if not then just remove it.
export function formatFieldErrorsNew<FormFieldType>(
  fields: { [key in keyof FormFieldType]: unknown },
  fieldErrors: Record<string, Array<string>>,
) {
  const result: Partial<{ [key: string]: { message: string; isInvalid: boolean } }> = {}

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

export const getTomorrow = () => {
  return moment().add(1, 'days').format('YYYY-MM-DD')
}

export const composeUrl = (url: URL, options?: { includePathname?: boolean }) => {
  const protocol = url.protocol?.includes('http') ? 'http' : 'https'

  if (!options?.includePathname) {
    return `${protocol}://${url.host}`
  }

  return `${protocol}://${url.host}${url.pathname}`
}

export const composeNumberId = (params: Params<string>) => {
  return params.id ? +params.id : undefined
}

export const composeLabels = (labels: unknown) => {
  if (!Array.isArray(labels)) {
    return []
  }

  return labels.filter((label) => label).map((label) => +label)
}

export const composePriority = (priority: Priority) => {
  const priorities = {
    [Priority.HIGH]: Priority.HIGH,
    [Priority.LOW]: Priority.LOW,
    [Priority.MEDIUM]: Priority.MEDIUM,
    [Priority.NORMAL]: Priority.NORMAL,
  }

  if (!priorities[priority]) {
    return Priority.NORMAL
  }

  return priorities[priority]
}

export const intentionalThrow = () => {
  if (process.env.NODE_ENV !== 'production') {
    throw new Error('Intentionally throwing error')
  }
}

import axios, { AxiosError } from 'axios'
import HttpStatusCode from 'src/constants/httpStatusCode.enum'

export function isAxiosError<T>(error: unknown): error is AxiosError<T> {
  return axios.isAxiosError(error)
}

export function isAxiosUnprocessableEntityError<FormError>(error: unknown): error is AxiosError<FormError> {
  return isAxiosError<FormError>(error) && error.response?.status === HttpStatusCode.UnprocessableEntity
}

export function formatCurrency(curreny: number) {
  return new Intl.NumberFormat('de-DE').format(curreny)
}

export function formatNumbetToSocialStyle(value: number) {
  return new Intl.NumberFormat('en', {
    notation: 'compact',
    maximumFractionDigits: 1
  })
    .format(value)
    .replace('.', ',')
    .toLowerCase()
}

export function rateSale(original: number, sale: number) {
  return Math.round(((sale - original) / original) * 100) + '%'
}

export const removeSpecialCharacter = (str: string) =>
  // eslint-disable-next-line no-useless-escape
  str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, '')

export function generateNameId({ name, id }: { name: string; id: string }) {
  return removeSpecialCharacter(name).replace(/\s/g, '-') + `-i,${id}`
}

export function getIdFromNameId(nameId: string) {
  const arr = nameId.split('-i,')
  return arr[arr.length - 1]
}

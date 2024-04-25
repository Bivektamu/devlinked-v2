export type FormData = {
  firstName: string,
  lastName: string,
  email: string,
  password: string
}
export enum ErrType  {
  SUCCESS = 'SUCCESS',
  INFO = 'INFO',
  WARNING = 'WARNING',
  ERROR = 'ERROR',
}
export type Error = {
  msg: String,
  type: ErrType
}

export type ErrorState = {
  errors: Error[]
}
export type State = {
  errors: ErrorState
}
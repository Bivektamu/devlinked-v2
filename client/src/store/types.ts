export type SignUpFormData = {
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
export type Toast = {
  msg: String,
  type: ErrType
}

export type ToastState = {
  toasts: Toast[]
}


export enum Status {
  IDLE = 'IDLE',
  PENDING = 'PENDING',
  FULFILLED = 'FULFILLED',
  REJECTED = 'REJECTED'
}
export type Auth = {
  isLoggedIn: boolean,
  status: Status,
  msg: string,
}

export type State = {
  toasts: ToastState,
  auth: Auth
}
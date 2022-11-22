export interface Notification {
  message: string,
  header?: string,
  action?: string,
  type?: 'success' | 'error'
}

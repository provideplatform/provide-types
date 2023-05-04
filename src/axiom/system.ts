import { Model } from '../model'

export type System = Model & {
  type: string
  description?: string
  name: string
  auth: {
    method: string
    username?: string
    password?: string
    require_client_credentials: false
    client_id?: string
    client_secret?: string
  }
  middleware: {
    inbound: {
      name?: string
      url?: string
      auth: {
        method: string
        username?: string
        password?: string
        require_client_credentials: false
        client_id?: string
        client_secret?: string
      }
    }
    outbound: {
      name?: string
      url?: string
      auth: {
        method: string
        username?: string
        password?: string
        require_client_credentials: false
        client_id?: string
        client_secret?: string
      }
    }
  }
  endpoint_url: string
}

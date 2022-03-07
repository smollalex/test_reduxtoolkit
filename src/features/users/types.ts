export interface IUser {
  id: boolean
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcoed: string
    geo: {
      lat: string
      lng: string
    }
  }
}

export interface IUserState {
  users: IUser[]
  isLoading: boolean
  error: Error | null
}
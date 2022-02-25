export interface UserInput {
  username: string,
  classe: string,
  level: number,
  password: string,
}

export interface User extends UserInput {
  id: number
}

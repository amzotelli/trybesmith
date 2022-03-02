export interface ProductInput {
  name: string,
  amount: number,
}

export interface Product extends ProductInput {
  id: number
}

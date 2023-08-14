export interface IProduct {
  id: number
  name: string
  price: number
  category: string
  stock: number
  subcategories: string[]
  mainImage: string
  description: string
  disabled: boolean
}

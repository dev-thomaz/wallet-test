export type ColorVariant = 'black' | 'green'
export interface ICard {
   id?:string,
   number: string,
   cvv: string,
   name: string,
   validDate: string,
   color: ColorVariant,
}
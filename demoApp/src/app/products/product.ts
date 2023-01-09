export enum Category{
    electrics='electrics',household='household',kitchen='kitchen'
}
export interface IProduct{

    id:number;
    name:string;
    category:Category;
    price:number;
    image:string;
    rating:number;
   // qty:number;

}

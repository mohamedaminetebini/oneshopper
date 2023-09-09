type Filster = {
    name: string;
    options: string[];
  }
type Product = {
    name: string;
    description: string;
    price: number;
    image: string;
    id: number;
    starts: number;
    quantity?: number;
  
    
}
type Categories = {
    name: string;
    img : string;
}
type Register = {
    email: string;
    password: string;
    username: string;
}
type Login = {
    email: string;
    password: string;
}
type Infos ={
    firstname: string;
    lastname: string;
    address: string;
    city: string;
    state: string;
    zipcode: string;
    country: string;
    phoneNumber: string;
    email: string;
}

  
  type newProd = {
    image:string
    starts:number
    name:string
    price:number
    quantity:number
    description:string
  };
  type UserInfo = {
    email: string;
    products: newProd[];
    type: string;
    cardNumber: string;
    cardHolder: string;
    expiryDate: string;
    cvv: string;
  };
  export {Filster , Product , Categories,Register, Login, Infos , UserInfo}
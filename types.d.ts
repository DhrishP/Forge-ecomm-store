type Category ={
    id:string,
    name:string,
    billboard : Billboard
}

type Billboard = {
    id:string,
    label:string,
    ImageUrl:string
}

type Products = {
    id:string,
    categories:Category,
    price:number,
    name:string,
    color:Color,
    size:Size,
    color:Color,
    Featured:boolean,
    Image:Image[]
}

type Image = {
    id:string,
    url:string
}

type Color = {
    id:string
    name:string,
    value:string
}

type Size ={
    id:string
    name:string,
    value:string
}


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
    category:Category,
    name:string,
    color:string,
    size:Size,
    color:Color,
    isFeatured:boolean,
    imagees:Image[]
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


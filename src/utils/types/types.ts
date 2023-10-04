

export type CardContainerProps = {
    title:string
}

export type CountdownCardProps = {
    hours: number,
    id: number,
    minutes: number,
    seconds: number,
    image: string,
    name: string,
    description: string,
    price: number,
};

export type TrendingCardDataProps = {
    id: number,
    image: string,
    name: string,
    description: string,
    Price: number
    new: boolean
}

export type WomenClothesProps = {
    id: number,
    name: string,
    description: string,
    price: number,
    OriginalPrice: string,
    discount: string,
    rating: string,
    img: string,
    favorite: boolean,
    cart: boolean,
    amount: number,
}

export type PromotionalCardProps = {
    title: string,
    description: string,
    bg: string,
    img: string,
}

export type LinkListProps = {
    title:string,
    link1: string,
    link2: string,
    link3: string,
  
  }
  

  export type hoverListProps = {
    HovTitle : string,
    HovLinks : string[]
   
}

export type HoverCardProps = {
    link:string
    }

    
export type CameraProps = {
    name: string,
    image: string,
    price: string,
}

export type OrderedCardsProps = {
    CartArr: WomenClothesProps[],
    length: number,
}
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
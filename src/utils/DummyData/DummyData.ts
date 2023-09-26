import { CountdownCardImg1, CountdownCardImg2, CountdownCardImg3, CountdownCardImg4, TrendingImage1, TrendingImage2, TrendingImage3 } from "../../assets/images"
import { CountdownCardProps, TrendingCardDataProps } from "../types/types"

export const CategoryLinksData = ['Woman', 'Male', 'Children', 'Home & Furniture', 'Super Market', 'Cosmetics', 'Shoe & Bag', 'Electronic', 'Sports & Outdoor', 
'Best seller'  ]



export const CountdownCardsData:CountdownCardProps[] = [{
    id: 1,
    hours: 12,
    minutes: 43,
    seconds: 23,
    image: CountdownCardImg1,
    name: 'tony Black',
    description: 'cute',
    price: 69.99,
},
{
    id:2,
    hours: 12,
    minutes: 43,
    seconds: 23,
    image: CountdownCardImg2,
    name: 'Reebok',
    description: 'Shoulder bag',
    price: 169.99,
},
{
    id:3,
    hours: 12,
    minutes: 43,
    seconds: 23,
    image: CountdownCardImg3,
    name: 'bag',
    description: 'overrated shoes',
    price: 629.99,
},
{
    id: 4,
    hours: 12,
    minutes: 43,
    seconds: 23,
    image: CountdownCardImg4,
    name: 'Jordans',
    description: 'fake',
    price: 969.99,
}]

export const TrendingCardData:TrendingCardDataProps[] = [{
    id:1,
    image: TrendingImage1,
    name: 'Cool & Sexy',
    description: 'align-self: stretch;',
    Price: 89,
    new: true,
    
},
{   
    id: 2,
    image: TrendingImage2,
    name: 'Cool & Sexy',
    description: 'align-self: stretch;',
    Price: 89,
    new: false,
    
},
{
    id: 3,
    image: TrendingImage3,
    name: 'Cool & Sexy',
    description: 'align-self: stretch;',
    Price: 89,
    new: true,
    
},
{
    id:4,
    image: TrendingImage1,
    name: 'Cool & Sexy',
    description: 'align-self: stretch;',
    Price: 89,
    new: true,
    
},
{   
    id: 5,
    image: TrendingImage2,
    name: 'Cool & Sexy',
    description: 'align-self: stretch;',
    Price: 89,
    new: false,
    
},
{
    id: 6,
    image: TrendingImage3,
    name: 'Cool & Sexy',
    description: 'align-self: stretch;',
    Price: 89,
    new: true,
    
},]
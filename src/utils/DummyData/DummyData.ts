import { CountdownCardImg1, CountdownCardImg2, CountdownCardImg3, CountdownCardImg4 } from "../../assets/images"
import { CountdownCardProps } from "../types/types"

export const CategoryLinksData = ['Woman', 'Male', 'Children', 'Home & Furniture', 'Super Market', 'Cosmetics', 'Shoe & Bag', 'Electronic', 'Sports & Outdoor', 
'Best seller'  ]



export const CountdownCardsData:CountdownCardProps[] = [{
    hours: 12,
    minutes: 43,
    seconds: 23,
    image: CountdownCardImg1,
    name: 'tony Black',
    description: 'cute',
    price: 69.99,
},
{
    hours: 12,
    minutes: 43,
    seconds: 23,
    image: CountdownCardImg2,
    name: 'Reebok',
    description: 'Shoulder bag-White-Plain',
    price: 169.99,
},
{
    hours: 12,
    minutes: 43,
    seconds: 23,
    image: CountdownCardImg3,
    name: 'bag',
    description: 'overrated shoes',
    price: 629.99,
},
{
    hours: 12,
    minutes: 43,
    seconds: 23,
    image: CountdownCardImg4,
    name: 'Jordans',
    description: 'fake',
    price: 969.99,
}]
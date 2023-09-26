
import { DownArrow, SearchIcon } from '../../../../assets/icons'

export const SearchBar = () => {
    return (
        <div className='flex h-[50px] sm:h-[36px] p-2 gap-[3px] justify-evenly items-center rounded-md border border-gray-300  sm:w-[321px] min-w-[-webkit-fill-available]'>
            <div className='flex justify-even '>
                <div className='flex items-end'>
                    <input className='outline-none text-[12px] w-[115px]' type='text' placeholder='Search Products'></input>
                </div>
                <div className='flex items-end gap-[3px]'>
                    <p className='whitespace-nowrap text-[12px] '>All Categories</p>
                    <DownArrow/>
                </div>
            </div>
            <div className='flex justify-evenly gap-[10px] items-center'>
            <div className='w-[1px] h-[38px] rounded-0 bg-gray-300'></div>
            <SearchIcon/>
            </div>
        </div>
    )
}

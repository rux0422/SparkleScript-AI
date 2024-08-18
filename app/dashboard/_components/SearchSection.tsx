
import  React from 'react'
import {Icon, Search} from 'lucide-react'

function SearchSection({onSearchInput}:any) {
    return(
        <div className='p-10 bg-gradient-to-tr from-pink-500 via-pink-700 to-orange-500 flex flex-col justify-center items-center'>
            <h2 className='text-2xl font-bold text-white' >Browse All Templates</h2>
            <p className='text-white'>Ready to sprinkle some magic? What enchanting creation will you craft today?</p>
            <div className='w-full flex justify-center'>
                <div className='flex gap-2 items-center p-2 border rounded bg-white my-5 w-[50%]'>
                    <Search className='text-pink-600'/>
                    <input type='text' placeholder='Search' 
                    onChange={(event)=>onSearchInput(event.target.value)}
                    className='bg-transparent w-full outline-none'/>
                </div>

            </div>
        
        </div>
    )
}

export default SearchSection
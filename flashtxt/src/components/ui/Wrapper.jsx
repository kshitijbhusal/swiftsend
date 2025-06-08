import React, { Children } from 'react'

const Wrapper = ({children}) => {
  return (
    <div className='h-fit w-full rounded-md p-4 bg-green-100' >
        <div className='h-fit w-fullrounded px-8 py-6'>
            {children}

        </div>  
        
    </div>
  )
}

export default Wrapper
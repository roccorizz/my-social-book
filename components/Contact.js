import Image from 'next/image'
import React from 'react'

function Contact({ src, name }) {
    console.log(src, name)
    return (
        <div className='flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl'>
            <Image
                className="rounded-full border-2 border-blue-500"
                cover
                src={src}
                width={40}
                height={40}
                alt="user_image"
                fixed
            />
            <p>{name}</p>
            <div className='absolute bottom-2 left-6 bg-green-400 h-3 w-3 rounded-full' />
        </div>
    )
}

export default Contact
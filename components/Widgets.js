import { VideoCameraIcon } from '@heroicons/react/24/solid'
import { EllipsisHorizontalIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

import React from 'react'
import Contact from './Contact'


const contacts = [

    {
        name: "Robin Khan",
        src: "https://res.cloudinary.com/dtzwecnp5/image/upload/v1676634494/profile3_rftj6h.jpg"

    },
    {
        name: "Ashfaq Chowdhury",
        src: "https://res.cloudinary.com/dtzwecnp5/image/upload/v1676809238/331603610_1543040132842140_2389587615028752615_n_ln35u3.jpg"
    },
    {
        name: "Monalisa Ahmed",
        src: "https://res.cloudinary.com/dtzwecnp5/image/upload/v1676627550/profile2_scycgm.jpg"
    },
    {
        name: "Kazi Faisal",
        src: "https://res.cloudinary.com/dtzwecnp5/image/upload/v1676809238/331472980_1156187928401569_1921268826919331829_n_bz8wpz.jpg"
    },
    {
        name: "Badshah Mia",
        src: "https://res.cloudinary.com/dtzwecnp5/image/upload/v1676634189/profile4_dn4vny.jpg"
    },
    {
        name: "Sonia D'costa",
        src: "https://res.cloudinary.com/dtzwecnp5/image/upload/v1676820695/298089056_5299332406820034_5249206327904473487_n_yrdsdf.jpg"
    }
]

function Widgets() {

    return (
        <div className='hidden lg:flex flex-col w-60 p-2 mt-5'>
            <div className='flex justify-between items-center text-gray-500 mb-5'>
                <h2 className='text-xl'>Contacts</h2>
                <div className='flex space-x-2'>
                    <VideoCameraIcon className='h-6' />
                    <MagnifyingGlassIcon className='h-6' />
                    <EllipsisHorizontalIcon className='h-6' />

                </div>
            </div>

            {contacts.map(contact => (
                <Contact key={contact.src}
                    src={contact.src}
                    name={contact.name}
                />
            ))}

        </div>
    )
}

export default Widgets;
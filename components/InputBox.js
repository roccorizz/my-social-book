import { FaceSmileIcon } from '@heroicons/react/24/outline';
import { VideoCameraIcon, CameraIcon } from '@heroicons/react/24/solid';
import { useSession } from 'next-auth/react';
import Image from 'next/image'
import { useRef } from 'react'
import Profile from "../public/profileimage.jpg"
function InputBox() {
    const [session] = useSession()
    const inputRef = useRef(null);
    const sendPost = (e) => {
        e.preventDefault();
        if (!inputRef.current.value) return;
    };
    return (
        <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6'>
            <div className='flex space-x-4 items-center'>
                <Image
                    className='rounded-full'
                    src={Profile}
                    width={40}
                    height={40}
                    fixed

                />
                <form className='flex flex-1'>
                    <input className='rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none'
                        type="text"
                        placeholder="What's on your mind, SK?">
                    </input>
                    <button hidden type="submit" onClick={sendPost}>
                        Submit
                    </button>
                </form>
            </div>

            <div className='flex justify-evenly p-3 border-t
            '>
                <div className='inputIcon'>
                    <VideoCameraIcon className='h-7 text-red-500' />
                    <p className='text=xs sm:text-sm xl:text-base'>Live Video</p>
                </div>
                <div className='inputIcon'>
                    <CameraIcon className='h-7 text-green-400' />
                    <p className='text=xs sm:text-sm xl:text-base'>Photo</p>
                </div>
                <div className='inputIcon'>
                    <FaceSmileIcon className='h-7 text-yellow-300' />
                    <p className='text=xs sm:text-sm xl:text-base'>Photo</p>
                </div>
            </div>

        </div>
    )
}

export default InputBox
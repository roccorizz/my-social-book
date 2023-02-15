import Image from "next/image";

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

import Homeicon from '../public/icons/homeicon.svg'
import Shopicon from '../public/icons/shopicon.svg'
import Watchicon from '../public/icons/watchicon.svg'
import Groupicon from '../public/icons/groupicon.svg'
import Gameicon from '../public/icons/gameicon.svg'
import HeaderIcon from "./HeaderIcon";
import Menuicon from "../public/icons/menuicon.svg"
import Messangericon from "../public/icons/messanger.svg"
import Notificationicon from "../public/icons/notification.svg"
import ProfileImage from "../public/profileimage.jpg"

function Header() {

    return (
        <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
            {/* Left */}
            <div className="flex items-center ">
                <Image src="/socialbook.png"
                    width={40}
                    height={40}
                    alt="logo"

                />
                <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2 flex-shrink ">

                    <MagnifyingGlassIcon className="h-6  text-gray-600" />
                    <input className="hidden md:inline-flex  ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink" type="text" placeholder="Search"></input>
                </div>
            </div>
            {/* Center */}
            <div className="flex justify-center flex-grow  ">
                <div className="flex space-x-6 md:space-x-2">

                    <HeaderIcon active Icon={Homeicon} />
                    <HeaderIcon Icon={Watchicon} />
                    <HeaderIcon Icon={Shopicon} />
                    <HeaderIcon Icon={Groupicon} />
                    <HeaderIcon Icon={Gameicon} />
                </div>


            </div>



            {/* Right */}
            <div className="flex items-center sm:space-x-2 justify-end">

                <p className="whitespace-nowrap font-semibold pr-3">SK Rizvi</p>
                <Menuicon className="icon " />
                <Messangericon className="icon" />
                <Notificationicon className="icon" />
                <Image className=" rounded-3xl " height={45} width={45} src={ProfileImage} />
            </div>
        </div >
    )
}

export default Header
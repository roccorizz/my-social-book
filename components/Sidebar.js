import { ChevronDownIcon, ClockIcon, FlagIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { UsersIcon, UserGroupIcon } from '@heroicons/react/24/solid'
import ShopIcon from "../public/icons/shopicon.svg"
import ProfileImage from "../public/profileimage.jpg"
import { useSession } from 'next-auth/react'
import React from 'react'
import SidebarRow from './SidebarRow'

function Sidebar() {
    // const [session, loading] = useSession();
    return (
        <div className='p-2 mt-5 max-w-[600px] xl:min-w-[300px]'>
            <MagnifyingGlassIcon className="h-7 pl-5 md:hidden text-gray-600" />
            <SidebarRow src={ProfileImage} title="SK Rizvi"></SidebarRow>
            <SidebarRow Icon={UsersIcon} title="Friends" />
            <SidebarRow Icon={UserGroupIcon} title="Groups" />
            <SidebarRow Icon={FlagIcon} title="Pages" />
            <SidebarRow Icon={ClockIcon} title="Most Recent" />
            <SidebarRow Icon={ShopIcon} title="Marketplace" />
            <SidebarRow Icon={ChevronDownIcon} title="See More" />
        </div>
    )
}

export default Sidebar
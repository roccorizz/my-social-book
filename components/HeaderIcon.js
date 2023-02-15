
function HeaderIcon({ Icon, active }) {
    return (
        <div className="flex items-center cursor-pointer space-x-6 md:space-x-2 md:px-10 sm:h-14 md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500 group ">
            <Icon className={`h-7 text-gray-500 group-hover:text-blue-500 sm:h-7 mx-auto text-center ${active && 'text-blue-500'}`} />
        </div>
    )
}

export default HeaderIcon
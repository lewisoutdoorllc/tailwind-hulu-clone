function HeaderItem({ Icon, title }) {
    return (
        <div className="flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white group">
            <Icon className="group-hover:animate-bounce h-8 mb-1 "/>
            <p className=" tracking-widest opacity-0 group-hover:opacity-100 ">{title}</p>
        </div>
    )
}

export default HeaderItem

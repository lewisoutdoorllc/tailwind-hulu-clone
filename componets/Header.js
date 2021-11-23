import Image from 'next/image'
import HeaderItem from './HeaderItem'
import {
    HomeIcon,
    SearchIcon,
    UserIcon,
    BadgeCheckIcon,
    CollectionIcon,
    LightningBoltIcon,
} from '@heroicons/react/outline'


function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
            <div className="flex flex-grow justify-evenly max-w-2xl">
            <HeaderItem title='HOME' Icon={HomeIcon} />
            <HeaderItem title='TRENDING' Icon={LightningBoltIcon} />
            <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} />
            <HeaderItem title='COLLECTIONS' Icon={CollectionIcon} />
            <HeaderItem title='SEARCH' Icon={SearchIcon} />
            <HeaderItem title='ACCOUNT' Icon={UserIcon} />
            </div>
            

            <Image
                className="object-contain"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdisneyadsales.com%2Fwp-content%2Fuploads%2F2019%2F07%2Fhulu-white.png&f=1&nofb=1"
                width={200} height={200}
                alt="hulu logo"
            />
        </header>
    )
}

export default Header

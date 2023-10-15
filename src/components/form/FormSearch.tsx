// components
import { IconButton } from "../button/IconButton"
import { InputBase } from "../input/InputBase"

// icons
import Search2LineIcon from 'remixicon-react/Search2LineIcon'
import MapPin2LineIcon from 'remixicon-react/MapPin2LineIcon'
import Briefcase2LineIcon from 'remixicon-react/Briefcase2LineIcon'
import MoneyDollarBoxLineIcon from 'remixicon-react/MoneyDollarBoxLineIcon'


export const FormSearch = () => {
    return (
        <div className="bg-black px-4 py-10 grid grid-cols-10 gap-3 text-white">
            <div className="col-span-2 flex justify-center items-center border-r border-r-zinc-600">
                <IconButton icon={<Search2LineIcon />} />
                <InputBase label="Search" />
            </div>
            <div className="col-span-2 flex justify-center items-center border-r border-r-zinc-600">
                <IconButton icon={<MapPin2LineIcon />} />
                <InputBase label="Work location" />
            </div>
            <div className="col-span-2 flex justify-center items-center border-r border-r-zinc-600">
                <IconButton icon={<Briefcase2LineIcon />} />
                <InputBase label="Experience" />
            </div>
            <div className="col-span-2 flex justify-center items-center border-r border-r-zinc-600">
                <IconButton icon={<MoneyDollarBoxLineIcon />} />
                <InputBase label="Per month" />
            </div>
            <div className="col-span-2 flex flex-col justify-center">
                <div className="flex justify-between">
                    <p>Salary range</p>
                    <p>
                        $1,200 - $20,000
                    </p>
                </div>
                <InputBase type="range" />
            </div>
        </div>
    )
}

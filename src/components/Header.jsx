import { MdSearch } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { GoChevronDown } from "react-icons/go";
import { TfiWorld } from "react-icons/tfi";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Popover } from '@headlessui/react'
import { User } from "./user";

export const Header = () => {
    const [value, setValue] = useState('')
    const { username } = useSelector((state) => state.user.userInfo)

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    return (
        <div className="flex justify-between items-center mb-5">
            <div className="w-1/3">
                <img src="/buta-logo.png" alt="" style={{ width: '350px', height: '100px' }} />
            </div>
            <div className="w-1/3 flex justify-between items-center bg-gray-200 p-2.5 rounded">
                <input type="text" placeholder="Search" className="bg-gray-200 w-full outline-none"
                    value={value}
                    onChange={handleChange}

                />
                <MdSearch className="text-xl text-gray-600" />
            </div>
            <div className="w-1/3 flex justify-center items-center text-gray-600 text-lg">
                <Popover className="relative">
                    <Popover.Button className='flex mr-10 outline-none p-1'>
                        <BsFillPersonFill />
                        <GoChevronDown />
                    </Popover.Button>

                    <Popover.Panel className="absolute z-10">
                        {({ close }) => (<User close={close} username={username} />
                        )}
                    </Popover.Panel>
                </Popover>
                <div className="flex items-center">
                    <TfiWorld />
                    <span className="ml-3">EN</span>
                </div>
            </div>
        </div>
    )
}


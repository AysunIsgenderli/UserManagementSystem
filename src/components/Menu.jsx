import { TbLayoutDashboard } from "react-icons/tb";
import { BsListTask } from "react-icons/bs";
import { MenuItem } from "./MenuItem";
import { GoOrganization } from "react-icons/go";
import { RxCalendar } from "react-icons/rx";
import { BsBriefcase } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
import { Link } from "react-router-dom";


export const Menu = () => {
    return (
        <div className="bg-gray-200 w-1/5 h-full">
            <Link to="/dashboard" >
                <MenuItem icon={<TbLayoutDashboard />} title='Dashboard' />
            </Link>
            <Link to="/dashboard/task" >
                <MenuItem icon={<BsListTask />} title='Task' />
            </Link>
            <Link to="/dashboard/members">
                <MenuItem icon={<GoOrganization />} title='Members' />
            </Link>
            <Link to="/dashboard/calendar">
                <MenuItem icon={<RxCalendar />} title='Calendar' />
            </Link>
            <Link to="/dashboard/jobs">
                <MenuItem icon={<BsBriefcase />} title='Jobs' />
            </Link>
            <hr />
            <div className="px-2 text-sky-900">Others</div>
            <Link to="/dashboard/settings">
                <MenuItem icon={<AiOutlineSetting />} title='Settings' className='py-1' />
            </Link>
        </div>
    )

}
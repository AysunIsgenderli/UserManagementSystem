import { useState } from "react"
import { useForm } from "react-hook-form";
import { Popover } from "@headlessui/react"
import { GoChevronDown } from "react-icons/go";
import { db } from "../data"
import DataTable from "react-data-table-component"
import { InputFilter } from "../components";
import './MemberPage.css'



export const MembersPage = () => {
    const { handleSubmit, register, formState: { errors }, reset } = useForm()
    const [tableData, setTableData] = useState(db)

    const columns = [
        {
            name: 'ID',
            selector: row => row.id,
            width: '150px'

        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,

        },
        {
            name: 'Age',
            selector: row => row.age,
            sortable: true,
            width: '150px'

        },
        {
            name: 'University',
            selector: row => row.university,
            sortable: true,

        },
        {
            name: 'Department',
            selector: row => row.department,
            sortable: true,


        },
    ]

    const handleFilter = ({ name, age, university, department }) => {
        const filteredTableData = tableData.filter(employee => {
            if (name && !employee.name.toLowerCase().includes(name.toLowerCase())) {
                return false;
            }
            if (department && !employee.department.toLowerCase().includes(department.toLowerCase())) {
                return false;
            }
            if (university && !employee.university.toLowerCase().includes(university.toLowerCase())) {
                return false;
            }
            if (age && Number(employee.age) !== Number(age)) {
                return false;
            }
            return true;
        })
        setTableData(filteredTableData)
    }

    const handleReset = () => {
        reset()
        setTableData(db)
    }

    return <div className="mt-8">
        <h1 className="text-center my-2 text-sky-700 text-2xl font-bold underline cursor-pointer">MEMBERS</h1>
        <Popover className='flex flex-col items-end'>
            <Popover.Button className="outline-none text-lg text-blue-500 flex items-center underline mb-3 py-3">
                <p className="mr-2">Detailed Search</p>
                <GoChevronDown />
            </Popover.Button>
            <Popover.Panel>
                <form onSubmit={handleSubmit(handleFilter)} className="flex items-center">
                    <InputFilter label='Name'  {...register('name')} />
                    <InputFilter label='Age' inputType="number" {...register('age')} />
                    <InputFilter label='University'  {...register('university')} />
                    <InputFilter label='Department'  {...register('department')} />
                    <button type="submit" className="bg-blue-400 p-2 ml-2 mt-7 cursor-pointer text-white rounded">Filter</button>
                    <button onClick={handleReset} className="bg-blue-400 p-2 ml-2 mt-7 cursor-pointer text-white rounded">Reset</button>

                </form>
            </Popover.Panel>
        </Popover>
        <DataTable className="mt-5"
            columns={columns}
            data={tableData}
            pagination
        >
        </DataTable>
    </div>
}
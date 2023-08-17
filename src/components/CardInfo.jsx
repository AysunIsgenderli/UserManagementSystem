import { departments } from "../data"
import { useParams } from "react-router-dom"
import DataTable from "react-data-table-component"

export const CardInfo = () => {
    const { departmentId } = useParams()
    const department = departments.find((department) => department.id === departmentId)

    const columns = [
        {
            name: 'ID',
            selector: row => row.id,
            width: '200px'

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
            width: '200px'

        },
        {
            name: 'University',
            selector: row => row.university,
            sortable: true,

        },

    ]

    return <div className="p-4">
        <h1 className="text-2xl font-bold text-sky-800 text-center">{department.title}</h1>
        <div className="flex items-center my-10  w-full">
            <div className="w-1/2"><img src={department.imageURL} alt="" /></div>
            <p className="text-lg max-w-xl ml-10">{department.desc}</p>
        </div>
        <DataTable className="mt-7"
            columns={columns}
            data={department.students}
            pagination
        >
        </DataTable>

    </div>
}
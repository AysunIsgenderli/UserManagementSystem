
export const MenuItem = ({ icon, title }) => {

    return (
        <div className="flex items-center my-8 px-2 py-3 text-sky-900 cursor-pointer">
            <div className="text-lg">{icon}</div>
            <h4 className="ml-2">{title}</h4>
        </div>
    )
}
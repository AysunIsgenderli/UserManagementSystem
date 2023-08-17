
export const ContentCard = ({ title, members, backgroundColor, imageURL }) => {
    return (
        <div className={`rounded p-4 border h-1/3 w-80 shadow mb-10 cursor-pointer flex flex-col justify-between`} style={{ backgroundColor }}>
            <div className="w-full bg-cover"><img src={imageURL} className="w-full h-40" /></div>
            <h1 className="text-lg font-bold my-3">{title}</h1>
            <p className="mt-3 text-end font-medium text-slate-900">{members} people</p>
        </div>
    )
}
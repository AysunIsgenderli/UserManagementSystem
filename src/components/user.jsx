import { GoX } from "react-icons/go";
import { useNavigate } from "react-router";

export const User = ({ username, close }) => {
    const navigate = useNavigate()
    

    const onClose = () => {
        close()
    }
    const handleLogOut = () => {
        navigate('/')
    }
    return (
        <div style={{ minWidth: '200px' }} className="absolute top-10 right-0.5 shadow h-36 bg-white  border flex justify-between p-4">
            <div className="flex flex-col justify-between">
                <h1 className="text-black text-2xl truncate	">{username}</h1>
                <button onClick={handleLogOut} className="text-red-600 text-sm underline">LOG OUT</button>
            </div>
            <button className="flex items-start p-1" onClick={onClose} >
                <GoX />
            </button>
        </div>
    )
}



import { useNavigate } from "react-router"
import { useForm } from "react-hook-form";
import { InputWithLabel } from "../components"
import { useDispatch } from "react-redux";
import { setUserInfo } from "../store";


export const LoginPage = () => {
    const { handleSubmit, register, formState: { errors } } = useForm()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onSubmit = (data) => {
        dispatch(setUserInfo(data))
        navigate('/dashboard')

    }
    const handleNavigate = ()=>{
        navigate('/register')
    }

    return (
        <div className="h-screen flex items-center justify-center">
            <div className="border w-1/2 bg-teal-500 px-4 py-7 rounded">
                <h2 className="text-xl my-3 text-center text-white">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <InputWithLabel label='Username' {...register('username', { required: true })} />
                    <InputWithLabel label='Password' inputType='password' {...register('password', { required: true })} />
                    <div className="text-center mt-4">
                        <button type="submit" className="rounded bg-teal-700 px-5 py-2 text-white">Log In</button>
                    </div>
                    <div className="text-center mt-4">
                        <button  onClick= {handleNavigate}  className="rounded bg-teal-700 px-5 py-2 text-white">Don't have an account? Register here.</button>
                    </div>
                </form>
            </div>
        </div>
    )
}


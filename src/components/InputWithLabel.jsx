import { forwardRef } from "react"

export const InputWithLabel = forwardRef(({ label, inputType, onChange, name}, ref) => {
    return (
        <div>
            <div className="flex flex-col m-3">
                <label className="text-lg my-2">{label}</label>
                <input
                    ref={ref}
                    type={inputType}
                    className="outline-none p-2"
                    name={name}
                    onChange={onChange}
                />
            </div>
        </div>
    )
})


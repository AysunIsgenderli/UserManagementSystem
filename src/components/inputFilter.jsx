import { forwardRef } from "react"

export const InputFilter = forwardRef(({ inputType, label, onChange, name }, ref) => {
    return (
        <div>
            <div className="flex flex-col">
                <label className="mb-2">{label}</label>
                <input
                    ref={ref}
                    type={inputType}
                    className="outline-none p-2 mr-3"
                    name={name}
                    onChange={onChange}
                />
            </div>
        </div>
    )
})
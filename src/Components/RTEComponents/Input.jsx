import React, { forwardRef, useId } from "react";

const Input = forwardRef(function Input(
    {
        label,
        type = "text",
        className = "",
        ...props
    },
    ref
) {
    const id = useId();

    return (
        <div className="w-full">
            {label && (
                <label
                    htmlFor={id}
                    className="inline-block mb-2 pl-1 font-medium text-gray-700"
                >
                    {label}
                </label>
            )}

            <input
                id={id}
                type={type}
                ref={ref}
                className={`w-full px-4 py-2 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-200 ${className}`}
                {...props}
            />
        </div>
    );
});

export default Input;
import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-purple-600",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button
            type={type}
            className={`px-5 py-2 rounded-lg font-medium transition-all duration-200 hover:opacity-90 active:scale-95 ${bgColor} ${textColor} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
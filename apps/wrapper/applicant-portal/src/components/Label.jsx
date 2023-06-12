import React from 'react'

const Label = (props) => {
    return (
        <label htmlFor={props.htmlFor} className={`block text-sm font-medium leading-6 text-gray-900 cursor-pointer ${(props.required) ? "after:content-['*'] after:ml-0.5 after:text-red-500" : ""}`}>
            { props.text }
        </label>
    )
}

export default Label

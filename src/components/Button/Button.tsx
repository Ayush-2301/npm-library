import React, { HTMLAttributes } from "react";
import {ReactNode} from "react"
import "./button.css"

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement>{
children: ReactNode
variant?:'primary'| 'secondary' | "custom"
}

const Button = ({children,variant='primary',...props}:ButtonProps) =>{
    return <button {...props} style={{backgroundColor: variant === 'primary' ? 'blue' : 'red'}}>{children}</button>
}
export default Button
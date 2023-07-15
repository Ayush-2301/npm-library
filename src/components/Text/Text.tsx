import React from "react";
import { ReactNode } from "react";
import "./text.css"

export interface TextProps {
    children:ReactNode,
}

const Text = ({children,...props}:TextProps)=>{
    return <h1 {...props}>{children}</h1>
} 

export default Text
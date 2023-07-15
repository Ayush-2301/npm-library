import React from "react";
import {render} from "@testing-library/react"

import Button from "./Button";

describe("Button", ()=>{
    test("test the button components",()=>{
        render(<Button variant="primary">hello</Button>)
    })
})


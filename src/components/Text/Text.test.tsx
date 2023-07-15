import React  from "react";
import {render} from "@testing-library/react"

import Text from "./Text";

describe("Text",()=>{
    test("test the Text component",()=>{
        render(<Text>this is random text</Text>)
    })
})
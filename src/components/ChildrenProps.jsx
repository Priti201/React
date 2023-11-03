import React from "react";
function Cards({children}){
    return(
        <div>
            {children}
        </div>
    )
}
const ChildrenProps=()=>{
    return(
        <div>
            <Cards>
                <h1>hello</h1>
                <h2>john</h2>
            </Cards>
            <Cards>
                <p>how are you?</p>
                <h6>I am jack</h6>
                <a href="#">Click here!</a>
            </Cards>
        </div>
    )
}
export default ChildrenProps;
import React from "react"

export default function Wrapper({childern ,className}){
    return(
        <div className={`w-full max-w-[1280px] px-5 md:px-10 mx-auto ${className || " "}`}>{childern}</div>
    );
};

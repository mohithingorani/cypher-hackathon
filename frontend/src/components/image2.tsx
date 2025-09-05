import Image from "next/image"

export const Image2= ({
    className
}:{
    className?:string
})=>{
    return (
        <Image className={`${className}`} src={"/quiz.svg"} width={"170"} height={"170"} alt="quiz"/>
    )
}
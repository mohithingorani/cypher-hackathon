export default function ExpertiseCard({label}:{
    label:string
}){
    return <div className="border hover:bg-slate-800 hover:text-white px-2 py-1 text-xs  rounded-2xl ">
        {label}
    </div>
}
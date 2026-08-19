import { Home, Users, Briefcase, MessageSquare , Bell } from "lucide-react";

export default function TopBarElements(props:any){
    {/*Used a proper map to map each element as per prop.title */}
    const iconMap:any = {
        "Home": Home,
        "My Network": Users,
        "Jobs": Briefcase,
        "Messaging": MessageSquare,
        "Notifications": Bell,
    };
    const Icon = iconMap[props.title]; 

    return <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"5px"}}>
        {Icon ? <Icon size={25} /> : <img style={{width:"25px", height:"25px"}}  alt="logo-icon" />}
        <p style={{margin:"0"}}>{props.title}</p>
    </div>
}
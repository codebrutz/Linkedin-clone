import { Bell, User } from "lucide-react";

export default function TopBarWithNotifications(props:any){
    const iconMap:any = {
        "Notifications": Bell,
        "Me": User
    };
    const Icon = iconMap[props.title];
    return <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"5px"}}>
        {Icon ? <Icon size={25} /> : <img style={{width:"25px", height:"25px"}} src={props.icon} alt="logo-icon" />}
        <p style={{margin:"0"}}>{props.title}</p>
    </div>
}
import Searchbar from "./Searchbar";
import TopBarElements from "./TopBarElements";
import TopBarWithNotifications from "./TopBarElementsWithNotification";

export default function TopBar(){
    return <div style={{display:"flex" , justifyContent:"space-around"}}>
        {/*  #// first is logo */}
        <div style={{display:"flex", alignItems:"center"}}>
            <img style={{width:"35px", height:"35px"}} src="https://img.icons8.com/color/1200/linkedin.jpg" alt="linkedin logo" />
            <Searchbar/>
        </div>

        {/*//icons zone */}
        <div style={{display:"flex", marginRight:"15px", gap:"15px"}}>
            <TopBarElements title={"Home"} />
            <TopBarElements title={"My Network"} />
            <TopBarElements title={"Jobs"} />
            <TopBarElements title={"Messaging"}/>
            
            <TopBarWithNotifications title={"Notifications"} />
            <TopBarWithNotifications title={"Me"} />
        </div>
    
    </div>
}
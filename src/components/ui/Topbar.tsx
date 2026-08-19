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
        <div style={{display:"flex", marginRight:"15px", gap:"4px", alignItems:"center"}}>
            <TopBarElements title={"Home"} count={0} />
            <TopBarElements title={"My Network"} count={700} />
            <TopBarElements title={"Jobs"} count={21} />
            <TopBarElements title={"Messaging"} count={5} />
            <TopBarElements title={"Notifications"} count={5} />
            
           
            <TopBarWithNotifications title={"Me"} />
            <TopBarWithNotifications title={"for Bussiness"}/>
        </div>
    
    </div>
}
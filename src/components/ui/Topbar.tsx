import Searchbar from "./Searchbar";
import TopBarElements from "./TopBarElements";
import TopBarWithNotifications from "./TopBarElementsWithNotification";

export default function TopBar(){
    return <div style={{display:"flex" , justifyContent:"space-around"}}>
       {/*  #// first is logo */}
        <div style={{display:"flex"}}>
            <img style={{width:"35px", height:"35px"}} src="https://img.icons8.com/color/1200/linkedin.jpg" alt="linkedin logo" />
            <Searchbar/>
        </div>

        {/*//icons zone */}
        <div style={{display:"flex", marginRight:"15px" }}>
            <TopBarElements title={"Home"} icon={"https://static.vecteezy.com/system/resources/previews/012/528/164/non_2x/home-icon-house-icon-illustration-perfect-for-all-project-vector.jpg "}/>
            <TopBarElements title={"My Network"} icon={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpc7r2GxPZMKlAS66M-04-xmGRw_E3g1yl7CVOqH7Gkw&s"}/>
            <TopBarElements title={"Jobs"} icon={"https://static.thenounproject.com/png/3754647-200.png"}/>
            <TopBarElements title={"Messaging"} icon={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsBI12rkSg17tzjU3Dr3Y7jL_Gm2X9HFebVngRVbgUBh7Gr152q9xGJzs&s=10"}/>
            
            <TopBarWithNotifications title={"Notifications"} icon={"https://static.thenounproject.com/png/1594277-200.png"}/>
            <TopBarWithNotifications title={"Me"} icon={"https://static.vecteezy.com/system/resources/thumbnails/067/451/114/small/avatar-default-user-profile-icon-gender-neutral-silhouette-simple-flat-profile-picture-symbol-user-account-dp-sign-best-for-social-media-icons-web-and-app-design-illustration-vector.jpg"}/>
        </div>
    
    </div>
}
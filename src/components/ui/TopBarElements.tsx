export default function TopBarElements(props:any){
    return <div>
        <img style={{width:"25px", height:"25px", marginBottom:"0px" , padding:"0px"}} src={props.icon} alt="logo-icon" />
        <p>{props.title}</p>
    </div>
}
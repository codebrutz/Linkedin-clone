import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { APITester } from "./APITester";
import "./index.css";
import Leftsidecomponent from "./components/ui/Leftsidecomponent";
import Rightsidecomponent from "./components/ui/Rightsidecomponent";
import Centralcomponent from "./components/ui/Centralcomponent";

import logo from "./logo.svg";
import reactLogo from "./react.svg";
import TopBar from "./components/ui/Topbar";

export function App() {
  return (
    <>
    <div style={{marginBottom:"10px"}}>
    <TopBar/>
    </div>
    <div style={{display:"flex"}}>
        <div style={{flex:1 , border:"2px solid black"}}><Leftsidecomponent/></div>
        <div style={{flex:2,border:"2px solid black"}}><Centralcomponent/></div>
        <div style={{flex:1,border:"2px solid black"}}><Rightsidecomponent/></div>
    </div>
    </>
  );
}

export default App;

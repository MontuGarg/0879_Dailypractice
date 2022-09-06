import {Link,Outlet} from "react-router-dom";
import './layout.css';
const layout=()=>{
    return(
        <>
        <nav className="nav">
            <Link to="/Welcome">Welcome</Link>
            <Link to="/registration"> Registration</Link>
            <Link to="/login"> Login</Link>
        </nav>
        <Outlet/>
        </>
    )
}
export default layout;
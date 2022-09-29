import {Link,Outlet} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout.css';
const layout=()=>{
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
            <Link className="nav-link active" to="/Welcome">Welcome</Link>
            <Link className="nav-link active" to="/about">About </Link>
            <Link className="nav-link active" to="/registration"> Registration</Link>
            <Link className="nav-link active" to="/login"> Login</Link>
            
            </div>
        </nav>
        <Outlet/>
        </>
    )
}
export default layout;
import './registration.css';
import {Link} from "react-router-dom";
const Registration=()=>{
    return (
        <div id='maindiv'>
       <div id='div2' style={divstyle}>  
       <form>
        <table>
            <tr>
                <td>First Name:<br/><input type="text" name="name" required/></td>
                <td>Last Name:<br/><input type="text" name="name" required/></td>
            </tr>
            <tr>
                
                <td>Email:<br/><input type="email" name="email"required/></td>
                <td>Phone Number:<br/><input type="number" name="number"required/></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>Password:<br/><input type="password" name="password"required /></td>
                <td>Confirm Password:<br/><input type="password" name="password"required /></td>

            </tr>
            <tr>
                <td colSpan="2" id="agree">
                    <input type="checkbox" name="checkbox"/><label name="checkbox" required >I agree to all <span>Terms </span>and <span>Privacy policy</span>.</label>
                   
                </td>
            </tr>
            <tr>
                <td colSpan="2" id="agree">
                   <Link to="/login"><button className="btn blue">Create Account</button></Link>
                </td>
            </tr>


        </table>
       </form>
       </div>   
       </div>
    )
}
const divstyle={
   border:"2px solid black",
   
}
export default Registration;
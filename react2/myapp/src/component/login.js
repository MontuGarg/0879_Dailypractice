import './login.css';
const login=()=>{
    return(
        <div id="divlogin">
        <form>
        <table>
            
            <tr>
                <td colSpan="2" className='login'><b>Email:</b><br/><input type="email" name="email"required/></td>
            </tr>
            <tr>
                <td colSpan="2"  className='login'><b>Password:</b><br/><input type="password" name="password"required /></td>

            </tr>
            <tr>
                <td colSpan="2" id="agree">
                    <input type="checkbox" name="checkbox"/><label name="checkbox" required>I agree to all <span>Terms </span>and <span>Privacy policy</span>.</label>
                   
                </td>
            </tr>
            <tr>
                <td colSpan="2" id="agree">
                   <button id="btn_login">Login</button>
                </td>
            </tr>

        </table>
       </form>
       </div>
    )
}
export default login;
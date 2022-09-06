const login=()=>{
    return(
        <form>
        <table>
            
            <tr>
                <td>Email:</td>
                <td><input type="email" name="email"required/></td>
            </tr>
            
            <tr>
                <td>Password:</td>
                <td><input type="password" name="password"required /></td>

            </tr>
            <tr>
                <td colSpan="2">
                    <input type="submit" name="submit" required/>
                </td>
            </tr>

        </table>
       </form>
    )
}
export default login;
import './registration.css'
const Registration=()=>{
    return (
        <div>
       <form>
        <table>
            <tr>
                <td>Name:</td>
                <td><input type="text" name="name" required/></td>
            </tr>
            <tr>
                <td>Email:</td>
                <td><input type="email" name="email"required/></td>
            </tr>
            <tr>
                <td>Mob. Number:</td>
                <td><input type="number" name="number"required/></td>
            </tr>
            <tr>
                <td>Password:</td>
                <td><input type="password" name="password"required /></td>

            </tr>
            <tr>
                <td colSpan="2">
                    <input type="submit" name="submit" />
                </td>
            </tr>

        </table>
       </form>
       </div>
    )
}
export default Registration;
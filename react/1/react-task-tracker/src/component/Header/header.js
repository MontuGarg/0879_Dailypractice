import PropTypes from "prop-types";
import './header.css';
import Button from  './../Button/Button';
const head=({title})=>{
    const onClick=(e)=>{
        console.log('click',e);
    }
    return (
        <header>
            <h1 style={headingStyle}> {title}</h1>
            <button className="btn">Add</button>
            <Button onClick={onClick} color="green" text="hello1"/>
        </header>
    )
}
const headingStyle={
    color:"darkcyan",
    backgroundColor:"lightblue",
    textAlign:"center",
}
head.defaultProps={
    title:"Task tracker",
}
head.propTypes ={
    title: PropTypes.string.isRequired,
}
export default head;
import PropTypes from "prop-types";
import './header.css';
const head=(props)=>{
    return (
        <header>
            <h1 style={headingStyle}>hello header {props.title}</h1>
            <h2 className="h2head">h2 heading</h2>
            <h3>h3 heading</h3>
            <button className="btn">Add</button>
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
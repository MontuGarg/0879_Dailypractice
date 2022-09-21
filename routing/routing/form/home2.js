import React from 'react';

function home2() {
  return (
    <div style={{backgroundImage:"url(D:/0879_Dailypractice/routing/routing/src/earth.jpg)",}}>
        <h1 style={homestyle}>home 2 Component.</h1>
        <img src={"earth.jpg"} alt={"image not found"} width={500} height={600}></img>
    </div>
  )
}
const homestyle={
    color:"black",
    

}
export default home2;
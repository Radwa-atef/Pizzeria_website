import React from 'react';
import './aboutus.scss';
function AboutUsComponent() {
    return(
<div>
    <div className="divColor">
    <p>ABOUT OUR 
        <span style={{fontWeight:"900"}}>CONCEPT</span>
        </p>
        <div className="spanWidth">
    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </span>
        </div>
    <div className="typesStyle">
        <span>Pizza</span>
        <span>Modern concept</span>
        <span>Story from shef</span>
        <span>Gallery</span>
    </div>
    </div>
    <div className="masterClass">
    <div className="contentStyle">
     <h4>MASTERCLASS</h4>
     <div className="yellowBox">
        <h4>| THE RECIPE FOR THE MOST DELICIOUS PIZZA DOUGH |</h4>
        <h3>waiting for you!</h3>
        <br/><br/>
        <div className="yellowBoxFooter">
        <span>Price_<b>15$</b></span><br/>
        <span>12:00-15:00</span>
        </div>
     </div>
     <br/>
     <div className="applyBox">
         <span>APPLY</span>
     </div>
    </div>

    </div>
</div>
    );
}
 
export default AboutUsComponent;
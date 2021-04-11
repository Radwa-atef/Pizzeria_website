import React from 'react';
import './menu.scss';
import {Layout } from 'element-react';

function MenuComponent() {
    return(
<div>
    <div className="Menuheader">
      <p>#pizzeria.</p>
      <br/>
      <div className="mainDiv">
        <div className="ourMenu">
          <span>OUR NEW MENU</span>
        </div>
        <div className="yellowBox">
          <Layout.Row>
             <Layout.Col lg="14" md="16" sm="18" xs="20"> 
          <div className="types">
          <span>| EIUSMOD SED DO</span>
          <br/> (tempor, incididunt, utas, labore, etws)
          <br/>
          <div className="lineHeight"></div>
          <span>||  DO Dolore
          <br/> (magna, aliqua, lorem) </span>
          <br/>
          <div className="lineHeight"></div>
          <span>||| EIUSMOD SED DO</span>
          <br/> (tempor, incididunt, utas, labore, etws)
          <br/>
          <div className="lineHeight"></div>
          <span>||  DO Dolore
          <br/> (magna, aliqua, lorem) </span>
        </div>
             </Layout.Col>
        <Layout.Col lg="10" md="8" sm="6" xs="4" style={{textAlign: "left"}}> 
          <div className="Price">
            <div className="backgroundColor"></div>
          <span>10$</span>
          <div>
          <span>14%</span></div>
          <div>
          <span>20$</span></div>
          <div >
          <span>10$</span></div>
        </div>
        </Layout.Col>
          </Layout.Row>
        </div>
        <br/><br/><br/><br/>
           {/* <div className="ourMenuTwo">
          <span>||| _ top in menu</span><br/>
           <span>|| _ sale iteam</span><br/>
            <span>| _ made by shef</span><br/>
        </div> */}
      </div>
    </div>
</div>
    );
}
 
export default MenuComponent;
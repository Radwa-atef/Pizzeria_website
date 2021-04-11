import React from 'react';
import './footer.scss';
import {Layout } from 'element-react';


function FooterComponent() {
    return(  
<div>
    <div className="FooterdivColor">
    <Layout.Row>
        <Layout.Col lg="12" md="12" sm="12" xs="24"> 
        <h6>ABOUT</h6>
        <p>Lorem ipsum dolor sit amet, consec
tetur adipisicing elit, sed do eiusmod tempor incididunt ultimam quantum</p>
        </Layout.Col>
        <Layout.Col lg="12" md="12" sm="12" xs="24"> 
         <Layout.Col lg="8" md="8" sm="8" xs="8"> 
        <h6>MENU</h6>
        <span>Team</span><br/>
        <span>Join us</span><br/>
        <span>Ethic</span><br/>
        <span>Goals</span><br/>
        </Layout.Col>
        <Layout.Col lg="8" md="8" sm="8" xs="8"> 
        <h6>SHEF</h6>
        <span>Team</span><br/>
        <span>Join us</span><br/>
        <span>Ethic</span><br/>
        <span>Goals</span><br/>
        </Layout.Col>
         <Layout.Col lg="8" md="8" sm="8" xs="8"> 
        <h6>CONTACT</h6>
        <span>Team</span><br/>
        <span>Join us</span><br/>
        <span>Ethic</span><br/>
        <span>Goals</span><br/>
        </Layout.Col>
        </Layout.Col>
    </Layout.Row>
    </div>
    
</div>
      );
}
 
export default FooterComponent;
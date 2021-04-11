import React from 'react';
import './news.scss';
import {Layout } from 'element-react';

function NewsComponent() {
    return(
<div>
    <div className="DivColor">
    <div className="news">
 <Layout.Row>
     <Layout.Col lg="14" md="18" sm="20" xs="24">
        <span className="types" style={{fontSize: "32px",letterSpacing: "6px"}}> What new?</span>
        <br/><br/><br/>  <br/><br/><br/><br/><br/>
   <div className="yelloBox">
   <div>
<p>new format</p>
<div className="types">
<span>|  Sed do eiusmod tempor incididunt ut Labore et</span>
 <br/>
<span className="lineHeight">|  Dolore magna aliqua </span>
<br/>
<span>| Quis ipsum suspendisse ultrices gravida </span>
<br/>
</div>
</div>
   </div>
     </Layout.Col>
 </Layout.Row>
    </div>
    </div>
    <div className="secondContent">
        <Layout.Row>
            <Layout.Col lg="8" md="8" sm="8" xs="24"> 
        <h4>| new format</h4>
        <div className="spanWidth">
        <span>Lorem ipsum dolor sit amet, consecte sectetur adipisicing elit, tation omne ullamco laboris nisi ut aliqolore.</span>
        </div>
        </Layout.Col>
            <Layout.Col lg="8" md="8" sm="8" xs="24">
        <h4>|| master classes</h4>
        <div className="spanWidth">
        <span>Lorem ipsum dolor sit amet, consecte sectetur adipisicing elit, tation omne ullamco laboris nisi ut aliqolore.</span>
        </div>
        </Layout.Col>
            <Layout.Col lg="8" md="8" sm="8" xs="24">
                <h4>||| pizza restaurant</h4>
        <div className="spanWidth">
        <span>Lorem ipsum dolor sit amet, consecte sectetur adipisicing elit, tation omne ullamco laboris nisi ut aliqolore.</span>
        </div>
          
            </Layout.Col>
        </Layout.Row>
    </div>
</div>
    );
}
 
export default NewsComponent;
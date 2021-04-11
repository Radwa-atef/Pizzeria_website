import React from 'react';
import './gallery.scss';
import faceBook from '../images/facebook.svg'
import whatsApp from '../images/whatsapp.svg'
import twitter from '../images/twitter.svg'
import pizza from '../images/pizza.png'
import {Layout } from 'element-react';

function GalleryComponent() {
    return(
<div>
    <div className="galleryDivColor">
    <div className="square"></div>
    <div className="GalleryHeader">
    <span className="span">GALLERY</span><br/><br/>
     <img src={pizza} className="img"/>
    <div className="secheader">
    <span>#pizzeria.</span><br/><br/>
    </div>
    <div className="Content">
        <Layout.Row>
        <Layout.Col lg="12" md="12" sm="10" xs="24">
        <div style={{textAlign: "left"}}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
        </div>
            </Layout.Col>
        <Layout.Col  lg="12" md="12" sm="14" xs="24" className="colStyle">
            <span className="colStylespan">| find us here</span>
            <br/>
            <div style={{marginTop: "10px",marginBottom:"10px"}}>
            <img  src={faceBook}/>
            <span style={{marginLeft: "15px", backgroundColor: "white", padding: "3px 5px 9px 5px", marginTop: "20px",borderRadius: "55%"}}>
            <img src={whatsApp}/>
            </span>
            <span style={{marginLeft: "15px", backgroundColor: "white", padding: "3px 5px 9px 5px", marginTop: "20px",borderRadius: "55%"}}>
            <img src={twitter}/>
            </span>
            </div>
            <br/>
            <span>| ask as here</span>
            <h5 >www.#pizzeria.com</h5>
        </Layout.Col>
        </Layout.Row>
    </div>
        </div>
    
    </div>
</div>
    );
}
 
export default GalleryComponent;
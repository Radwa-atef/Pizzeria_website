// import logo from './logo.svg';
import React,{Component} from 'react';
import NavbarComponent from './navbar/navbar';
import NewsComponent from './news/news';
import MenuComponent from './menu/menu';
import AboutUsComponent from './aboutus/aboutus';
import GalleryComponent from './gallery/gallery';
import FooterComponent from './footer/footer';
import './App.css';

class App extends Component {
  render() {
    window.scrollTo(0,0);
    return (
    <div className="App">
    <NavbarComponent/>
    <NewsComponent/>
    <MenuComponent/>
    <AboutUsComponent/>
    <GalleryComponent/>
    <FooterComponent/>
    </div>
    );
  }
}

export default App;

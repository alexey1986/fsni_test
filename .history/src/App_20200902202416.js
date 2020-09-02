import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBarComponent from './components/nav/NavBar';
import FooterComponent from './components/footer/Footer';
import Home from './pages/home';
import Calendar from './pages/calendar';
import News from './pages/news';
import Blogs from './pages/blogs';

const App = () => {
  return (
    <Router>
      <NavBarComponent />
      <Route path="/" exact component={Home} />
      <Route path="/calendar" exact component={Calendar} />
      <Route path="/news" exact component={News} />
      <Route path="/blogs" exact component={Blogs} />
      <FooterComponent />
    </Router>
  )
}


export default App;

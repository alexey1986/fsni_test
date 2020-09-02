import React from 'react';


import { BrowserRouter as Router, Link, NavLink, Route } from "react-router-dom";


import NavBarComponent from './components/nav/NavBar';

const App = () => {
  return (
    <Router>
      <NavBarComponent></NavBarComponent>
      <Route path="/" exact component={Home} />
      <Route path="/calendar" exact component={Calendar} />
      <Route path="/news" exact component={News} />
      <Route path="/blogs" exact component={Blogs} />
    </Router>
  )
}


export default App;

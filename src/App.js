import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Landing from './pages/landing/landing.js';
import { Provider } from 'react-redux';
import store from './redux/redux';
import Header from './component/header/header.component'
import Footer from './component/bottom/bottom.component'
import Signup from './component/signup/signup';
import Home from './pages/home/home'
import Sidedrawer from './component/sidedrawer/sidedrawer';
import Account from './pages/account/account';


function App() {
  return (
    <Provider store={store}>

    <div>
      {/* <Header /> */}
      <Route exact path='/' component={Landing} />
      <Route exact path='/signup' component={Signup}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/sidedrawer" component={Sidedrawer}/>
      <Route exact path='/account' component={Account}/>
      {/* <Footer /> */}
    </div>
    </Provider>

  );
}

export default App;

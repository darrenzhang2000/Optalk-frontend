import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Register from './pages/register/register.page';
import Landing from './pages/landing/landing.js';
import { Provider } from 'react-redux';
import store from './redux/redux';
import Header from './component/header/header.component'
import Footer from './component/bottom/bottom.component'
import Signup from './component/signup/signup';



function App() {
  return (
    <Provider store={store}>

    <div>
      {/* <Header /> */}
      <Route exact path='/' component={Landing} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/signup' component={Signup}/>
      {/* <Footer /> */}
    </div>
    </Provider>

  );
}

export default App;

import React, {useEffect} from 'react';
import { Provider } from "react-redux";
import {Router} from "react-router-dom"
import { ConfigureStore } from "./redux/configureStore"
import Main  from "./components/Main";
import "./App.css"
import M from 'materialize-css/dist/js/materialize.min.js'
import history from "./redux/history"


const store = ConfigureStore();
export default function App(){
  useEffect(()=>{
    window.addEventListener('load', function() {
      var elems = document.querySelectorAll('.sidenav'); 
       
      M.Sidenav.init(elems, {});
    });
      
  }, [])
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            <Main />
          </div>
        </Router>
      </Provider>
      
    )
}
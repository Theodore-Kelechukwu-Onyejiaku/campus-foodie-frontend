import React, {useEffect} from 'react';
import Main  from "./components/Main";
import M from 'materialize-css/dist/js/materialize.min.js'

export default function App(){
  useEffect(()=>{
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems, {});
    });
      
  }, [])
    return (
      <div>
        <Main />
      </div>
    )
}
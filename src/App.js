import React from 'react';

import Sidebar from './components/Sidebar'
import Content from './components/Content'
import 'bootstrap/dist/css/bootstrap.css';


const style = {

  

  margin: '0',
  padding: '0',
  //minHeight: '100vh',
//  display: 'flex',
  //flexDirection: 'column',
  //alignItems: 'center',
  //justifyContent: 'center',
  //color: 'white'
}

const styleSidebar = {

  background: 'linear-gradient(to right, #000000, #434343)',
  color: 'white',
  position: '-webkit-sticky',
  position: 'sticky',
            
}

function App() {
  return (
    
      <div className='row container-fluid' style={style}>
        <div className='col-lg-3 col-md-12 col-sm-12'
              style={styleSidebar}
              >
          <Sidebar/>
        </div> 
        <div className='col-lg-9 col-md-12 col-sm-12' style={style}>
          <Content/>
        </div>
      </div>
    
  );
} 

export default App;

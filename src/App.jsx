import React from 'react';
import Header from './layout/Header/Header'
import Sidebar from './components/SideBar/Sidebar'
import Content from './layout/Content/Content'
import { MainStyle, Wrapper } from './sources/Styles'
// import 'bootstrap/dist/css/bootstrap.css'


function App() {
  return (
      <>
        <MainStyle/>
        <Wrapper>
            <Header/>
            <Content/>          
        </Wrapper>
      </>
  );
} 

export default App;

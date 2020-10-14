import React from 'react';
import Header from './components/Header.jsx'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import styled from 'styled-components'
import { MainStyle } from './components/Styles'
import 'bootstrap/dist/css/bootstrap.css'
import Fade from 'react-reveal/Fade'


const Wrapper = styled.div`

  
  background-image: var(--background-img);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  /*display: grid;
  grid-template-columns: repeat(12, 1fr);
*/
  
  .sidebar {
    grid-column: span 3;
    background: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.05));
    color: white;
    
  }

  .content-sidebar {

    grid-column: span 9;
    /*grid-column: span 12;*/
  }


  .header{
    grid-column: span 12;
  }

  .content-header{
    grid-column: span 12;
  }

@media screen and (max-width: 640px) {
  .sidebar {
    grid-column: span 12;
  }
  .content-sidebar {
    grid-column: span 12;
  }
}

`

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

import React from 'react';
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.css'
import Fade from 'react-reveal/Fade'


const img = require('../src/assets/img/banner.jpg')

const Wrapper = styled.div`

  --background-img: linear-gradient(to bottom, rgba(30, 35, 59, 0.52), rgba(0, 0, 0, 0.73)),url(${img});
  --card-background: linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.75));
  /*background: */
  --card-header-footer: linear-gradient(to right, rgba(6, 17, 97, 1), rgba(120, 2, 6, 0.75));
  
  background-image: var(--background-img);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  display: grid;
  grid-template-columns: repeat(12, 1fr);

  .sidebar {
    grid-column: span 3;
    background: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.05));
    color: white;
    

  }

  .content {

    
    grid-column: span 9;
  }

@media screen and (max-width: 640px) {
  .sidebar {
    grid-column: span 12;
  }
  .content {
    grid-column: span 12;
  }
}

`

function NewApp() {
  return (
    
      <Wrapper>
        <Fade left>
        <div className="sidebar">
          <Sidebar/>
        </div>
        </Fade>
        <div className="content">
          <Content/>
        </div>
      </Wrapper>
    
  );
} 

export default NewApp;

import styled, { createGlobalStyle } from 'styled-components'


const img = require('../assets/img/code2.jpg')


export const MainStyle = createGlobalStyle`
	
/*! CUSTOM VARIABLES */


* {

  --background-img: linear-gradient(to bottom, rgba(30, 35, 59, 0.52), rgba(0, 0, 0, 0.73)),url(${img});
  /*--background-img: linear-gradient(307deg, transparent 0%, transparent 10%,rgba(190, 190, 190,0.04) 10%, rgba(190, 190, 190,0.04) 64%,transparent 64%, transparent 100%),linear-gradient(118deg, transparent 0%, transparent 11%,rgba(190, 190, 190,0.04) 11%, rgba(190, 190, 190,0.04) 31%,transparent 31%, transparent 100%),linear-gradient(73deg, transparent 0%, transparent 22%,rgba(190, 190, 190,0.04) 22%, rgba(190, 190, 190,0.04) 90%,transparent 90%, transparent 100%),linear-gradient(156deg, transparent 0%, transparent 51%,rgba(190, 190, 190,0.04) 51%, rgba(190, 190, 190,0.04) 97%,transparent 97%, transparent 100%),linear-gradient(90deg, rgb(0,0,0),rgb(0,0,0)); */
  --card-background: linear-gradient(307deg, transparent 0%, transparent 10%,rgba(190, 190, 190,0.04) 10%, rgba(190, 190, 190,0.04) 64%,transparent 64%, transparent 100%),linear-gradient(118deg, transparent 0%, transparent 11%,rgba(190, 190, 190,0.04) 11%, rgba(190, 190, 190,0.04) 31%,transparent 31%, transparent 100%),linear-gradient(73deg, transparent 0%, transparent 22%,rgba(190, 190, 190,0.04) 22%, rgba(190, 190, 190,0.04) 90%,transparent 90%, transparent 100%),linear-gradient(156deg, transparent 0%, transparent 51%,rgba(190, 190, 190,0.04) 51%, rgba(190, 190, 190,0.04) 97%,transparent 97%, transparent 100%),linear-gradient(90deg, rgb(0,0,0),rgb(0,0,0)); 
  /*background: */
  --card-header-footer: linear-gradient(90deg, rgba(125, 125, 125, 0) 0%, rgba(125, 125, 125, 0) 7%,rgba(194, 194, 194, 0) 7%, rgba(194, 194, 194, 0) 29%,rgba(124, 124, 124, 0) 29%, rgba(124, 124, 124, 0) 57%,rgba(237, 237, 237, 0) 57%, rgba(237, 237, 237, 0) 59%,rgba(110, 110, 110, 0) 59%, rgba(110, 110, 110, 0) 100%),linear-gradient(90deg, rgba(6, 6, 6, 0.01) 0%, rgba(6, 6, 6, 0.01) 20%,rgba(210, 210, 210, 0.01) 20%, rgba(210, 210, 210, 0.01) 64%,rgba(10, 10, 10, 0.01) 64%, rgba(10, 10, 10, 0.01) 82%,rgba(72, 72, 72, 0.01) 82%, rgba(72, 72, 72, 0.01) 88%,rgba(127, 127, 127, 0.01) 88%, rgba(127, 127, 127, 0.01) 100%),linear-gradient(90deg, rgba(4, 4, 4, 0.06) 0%, rgba(4, 4, 4, 0.06) 56%,rgba(6, 6, 6, 0.06) 56%, rgba(6, 6, 6, 0.06) 65%,rgba(110, 110, 110, 0.06) 65%, rgba(110, 110, 110, 0.06) 83%,rgba(136, 136, 136, 0.06) 83%, rgba(136, 136, 136, 0.06) 100%),linear-gradient(349deg, rgba(137, 137, 137, 0.02) 0%, rgba(137, 137, 137, 0.02) 43%,rgba(112, 112, 112, 0.02) 43%, rgba(112, 112, 112, 0.02) 100%),linear-gradient(47deg, rgba(184, 184, 184, 0.06) 0%, rgba(184, 184, 184, 0.06) 36%,rgba(32, 32, 32, 0.06) 36%, rgba(32, 32, 32, 0.06) 100%),linear-gradient(83deg, rgba(222, 222, 222, 0.07) 0%, rgba(222, 222, 222, 0.07) 98%,rgba(143, 143, 143, 0.07) 98%, rgba(143, 143, 143, 0.07) 100%),repeating-linear-gradient(0deg, rgba(244, 244, 244, 0.08) 0px, rgba(244, 244, 244, 0.08) 72px,rgba(155, 155, 155, 0.08) 72px, rgba(155, 155, 155, 0.08) 179px,rgba(102, 102, 102, 0.08) 179px, rgba(102, 102, 102, 0.08) 477px,rgba(133, 133, 133, 0.08) 477px, rgba(133, 133, 133, 0.08) 580px,rgba(83, 83, 83, 0.08) 580px, rgba(83, 83, 83, 0.08) 614px),repeating-linear-gradient(135deg, rgba(115, 115, 115, 0.03) 0px, rgba(115, 115, 115, 0.03) 266px,rgba(99, 99, 99, 0.03) 266px, rgba(99, 99, 99, 0.03) 273px,rgba(115, 115, 115, 0.03) 273px, rgba(115, 115, 115, 0.03) 351px,rgba(229, 229, 229, 0.03) 351px, rgba(229, 229, 229, 0.03) 439px),repeating-linear-gradient(45deg, rgba(72, 72, 72, 0.01) 0px, rgba(72, 72, 72, 0.01) 232px,rgba(65, 65, 65, 0.01) 232px, rgba(65, 65, 65, 0.01) 345px,rgba(140, 140, 140, 0.01) 345px, rgba(140, 140, 140, 0.01) 348px,rgba(26, 26, 26, 0.01) 348px, rgba(26, 26, 26, 0.01) 547px),repeating-linear-gradient(45deg, rgba(68, 68, 68, 0.05) 0px, rgba(68, 68, 68, 0.05) 115px,rgba(182, 182, 182, 0.05) 115px, rgba(182, 182, 182, 0.05) 246px,rgba(14, 14, 14, 0.05) 246px, rgba(14, 14, 14, 0.05) 272px,rgba(80, 80, 80, 0.05) 272px, rgba(80, 80, 80, 0.05) 298px,rgba(37, 37, 37, 0.05) 298px, rgba(37, 37, 37, 0.05) 434px),repeating-linear-gradient(135deg, rgba(46, 46, 46, 0.03) 0px, rgba(46, 46, 46, 0.03) 107px,rgba(169, 169, 169, 0.03) 107px, rgba(169, 169, 169, 0.03) 182px,rgba(71, 71, 71, 0.03) 182px, rgba(71, 71, 71, 0.03) 321px,rgba(182, 182, 182, 0.03) 321px, rgba(182, 182, 182, 0.03) 359px),linear-gradient(90deg, #084da4 0%,#01aeb6 100%);
  --slider-colors: linear-gradient(90deg, rgba(125, 125, 125, 0) 0%, rgba(125, 125, 125, 0) 7%,rgba(194, 194, 194, 0) 7%, rgba(194, 194, 194, 0) 29%,rgba(124, 124, 124, 0) 29%, rgba(124, 124, 124, 0) 57%,rgba(237, 237, 237, 0) 57%, rgba(237, 237, 237, 0) 59%,rgba(110, 110, 110, 0) 59%, rgba(110, 110, 110, 0) 100%),linear-gradient(90deg, rgba(6, 6, 6, 0.01) 0%, rgba(6, 6, 6, 0.01) 20%,rgba(210, 210, 210, 0.01) 20%, rgba(210, 210, 210, 0.01) 64%,rgba(10, 10, 10, 0.01) 64%, rgba(10, 10, 10, 0.01) 82%,rgba(72, 72, 72, 0.01) 82%, rgba(72, 72, 72, 0.01) 88%,rgba(127, 127, 127, 0.01) 88%, rgba(127, 127, 127, 0.01) 100%),linear-gradient(90deg, rgba(4, 4, 4, 0.06) 0%, rgba(4, 4, 4, 0.06) 56%,rgba(6, 6, 6, 0.06) 56%, rgba(6, 6, 6, 0.06) 65%,rgba(110, 110, 110, 0.06) 65%, rgba(110, 110, 110, 0.06) 83%,rgba(136, 136, 136, 0.06) 83%, rgba(136, 136, 136, 0.06) 100%),linear-gradient(349deg, rgba(137, 137, 137, 0.02) 0%, rgba(137, 137, 137, 0.02) 43%,rgba(112, 112, 112, 0.02) 43%, rgba(112, 112, 112, 0.02) 100%),linear-gradient(47deg, rgba(184, 184, 184, 0.06) 0%, rgba(184, 184, 184, 0.06) 36%,rgba(32, 32, 32, 0.06) 36%, rgba(32, 32, 32, 0.06) 100%),linear-gradient(83deg, rgba(222, 222, 222, 0.07) 0%, rgba(222, 222, 222, 0.07) 98%,rgba(143, 143, 143, 0.07) 98%, rgba(143, 143, 143, 0.07) 100%),repeating-linear-gradient(0deg, rgba(244, 244, 244, 0.08) 0px, rgba(244, 244, 244, 0.08) 72px,rgba(155, 155, 155, 0.08) 72px, rgba(155, 155, 155, 0.08) 179px,rgba(102, 102, 102, 0.08) 179px, rgba(102, 102, 102, 0.08) 477px,rgba(133, 133, 133, 0.08) 477px, rgba(133, 133, 133, 0.08) 580px,rgba(83, 83, 83, 0.08) 580px, rgba(83, 83, 83, 0.08) 614px),repeating-linear-gradient(135deg, rgba(115, 115, 115, 0.03) 0px, rgba(115, 115, 115, 0.03) 266px,rgba(99, 99, 99, 0.03) 266px, rgba(99, 99, 99, 0.03) 273px,rgba(115, 115, 115, 0.03) 273px, rgba(115, 115, 115, 0.03) 351px,rgba(229, 229, 229, 0.03) 351px, rgba(229, 229, 229, 0.03) 439px),repeating-linear-gradient(45deg, rgba(72, 72, 72, 0.01) 0px, rgba(72, 72, 72, 0.01) 232px,rgba(65, 65, 65, 0.01) 232px, rgba(65, 65, 65, 0.01) 345px,rgba(140, 140, 140, 0.01) 345px, rgba(140, 140, 140, 0.01) 348px,rgba(26, 26, 26, 0.01) 348px, rgba(26, 26, 26, 0.01) 547px),repeating-linear-gradient(45deg, rgba(68, 68, 68, 0.05) 0px, rgba(68, 68, 68, 0.05) 115px,rgba(182, 182, 182, 0.05) 115px, rgba(182, 182, 182, 0.05) 246px,rgba(14, 14, 14, 0.05) 246px, rgba(14, 14, 14, 0.05) 272px,rgba(80, 80, 80, 0.05) 272px, rgba(80, 80, 80, 0.05) 298px,rgba(37, 37, 37, 0.05) 298px, rgba(37, 37, 37, 0.05) 434px),repeating-linear-gradient(135deg, rgba(46, 46, 46, 0.03) 0px, rgba(46, 46, 46, 0.03) 107px,rgba(169, 169, 169, 0.03) 107px, rgba(169, 169, 169, 0.03) 182px,rgba(71, 71, 71, 0.03) 182px, rgba(71, 71, 71, 0.03) 321px,rgba(182, 182, 182, 0.03) 321px, rgba(182, 182, 182, 0.03) 359px),linear-gradient(90deg, #084da4 0%,#01aeb6 100%);
  --background-darker: linear-gradient(90deg, rgba(125, 125, 125, 0) 0%, rgba(125, 125, 125, 0) 7%,rgba(194, 194, 194, 0) 7%, rgba(194, 194, 194, 0) 29%,rgba(124, 124, 124, 0) 29%, rgba(124, 124, 124, 0) 57%,rgba(237, 237, 237, 0) 57%, rgba(237, 237, 237, 0) 59%,rgba(110, 110, 110, 0) 59%, rgba(110, 110, 110, 0) 100%),linear-gradient(90deg, rgba(6, 6, 6, 0.01) 0%, rgba(6, 6, 6, 0.01) 20%,rgba(210, 210, 210, 0.01) 20%, rgba(210, 210, 210, 0.01) 64%,rgba(10, 10, 10, 0.01) 64%, rgba(10, 10, 10, 0.01) 82%,rgba(72, 72, 72, 0.01) 82%, rgba(72, 72, 72, 0.01) 88%,rgba(127, 127, 127, 0.01) 88%, rgba(127, 127, 127, 0.01) 100%),linear-gradient(90deg, rgba(4, 4, 4, 0.06) 0%, rgba(4, 4, 4, 0.06) 56%,rgba(6, 6, 6, 0.06) 56%, rgba(6, 6, 6, 0.06) 65%,rgba(110, 110, 110, 0.06) 65%, rgba(110, 110, 110, 0.06) 83%,rgba(136, 136, 136, 0.06) 83%, rgba(136, 136, 136, 0.06) 100%),linear-gradient(349deg, rgba(137, 137, 137, 0.02) 0%, rgba(137, 137, 137, 0.02) 43%,rgba(112, 112, 112, 0.02) 43%, rgba(112, 112, 112, 0.02) 100%),linear-gradient(47deg, rgba(184, 184, 184, 0.06) 0%, rgba(184, 184, 184, 0.06) 36%,rgba(32, 32, 32, 0.06) 36%, rgba(32, 32, 32, 0.06) 100%),linear-gradient(83deg, rgba(222, 222, 222, 0.07) 0%, rgba(222, 222, 222, 0.07) 98%,rgba(143, 143, 143, 0.07) 98%, rgba(143, 143, 143, 0.07) 100%),repeating-linear-gradient(0deg, rgba(244, 244, 244, 0.08) 0px, rgba(244, 244, 244, 0.08) 72px,rgba(155, 155, 155, 0.08) 72px, rgba(155, 155, 155, 0.08) 179px,rgba(102, 102, 102, 0.08) 179px, rgba(102, 102, 102, 0.08) 477px,rgba(133, 133, 133, 0.08) 477px, rgba(133, 133, 133, 0.08) 580px,rgba(83, 83, 83, 0.08) 580px, rgba(83, 83, 83, 0.08) 614px),repeating-linear-gradient(135deg, rgba(115, 115, 115, 0.03) 0px, rgba(115, 115, 115, 0.03) 266px,rgba(99, 99, 99, 0.03) 266px, rgba(99, 99, 99, 0.03) 273px,rgba(115, 115, 115, 0.03) 273px, rgba(115, 115, 115, 0.03) 351px,rgba(229, 229, 229, 0.03) 351px, rgba(229, 229, 229, 0.03) 439px),repeating-linear-gradient(45deg, rgba(72, 72, 72, 0.01) 0px, rgba(72, 72, 72, 0.01) 232px,rgba(65, 65, 65, 0.01) 232px, rgba(65, 65, 65, 0.01) 345px,rgba(140, 140, 140, 0.01) 345px, rgba(140, 140, 140, 0.01) 348px,rgba(26, 26, 26, 0.01) 348px, rgba(26, 26, 26, 0.01) 547px),repeating-linear-gradient(45deg, rgba(68, 68, 68, 0.05) 0px, rgba(68, 68, 68, 0.05) 115px,rgba(182, 182, 182, 0.05) 115px, rgba(182, 182, 182, 0.05) 246px,rgba(14, 14, 14, 0.05) 246px, rgba(14, 14, 14, 0.05) 272px,rgba(80, 80, 80, 0.05) 272px, rgba(80, 80, 80, 0.05) 298px,rgba(37, 37, 37, 0.05) 298px, rgba(37, 37, 37, 0.05) 434px),repeating-linear-gradient(135deg, rgba(46, 46, 46, 0.03) 0px, rgba(46, 46, 46, 0.03) 107px,rgba(169, 169, 169, 0.03) 107px, rgba(169, 169, 169, 0.03) 182px,rgba(71, 71, 71, 0.03) 182px, rgba(71, 71, 71, 0.03) 321px,rgba(182, 182, 182, 0.03) 321px, rgba(182, 182, 182, 0.03) 359px),linear-gradient(90deg, #084da4 0%,#01aeb6 20%);
  --header-bg: linear-gradient(307deg, transparent 0%, transparent 10%,rgba(190, 190, 190,0.04) 10%, rgba(190, 190, 190,0.04) 64%,transparent 64%, transparent 100%),linear-gradient(118deg, transparent 0%, transparent 11%,rgba(190, 190, 190,0.04) 11%, rgba(190, 190, 190,0.04) 31%,transparent 31%, transparent 100%),linear-gradient(73deg, transparent 0%, transparent 22%,rgba(190, 190, 190,0.04) 22%, rgba(190, 190, 190,0.04) 90%,transparent 90%, transparent 100%),linear-gradient(156deg, transparent 0%, transparent 51%,rgba(190, 190, 190,0.04) 51%, rgba(190, 190, 190,0.04) 97%,transparent 97%, transparent 100%),linear-gradient(90deg, rgb(0,0,0),rgb(0,0,0)); 
  --header-color: linear-gradient(90deg, rgba(125, 125, 125, 0) 0%, rgba(125, 125, 125, 0) 7%,rgba(194, 194, 194, 0) 7%, rgba(194, 194, 194, 0) 29%,rgba(124, 124, 124, 0) 29%, rgba(124, 124, 124, 0) 57%,rgba(237, 237, 237, 0) 57%, rgba(237, 237, 237, 0) 59%,rgba(110, 110, 110, 0) 59%, rgba(110, 110, 110, 0) 100%),linear-gradient(90deg, rgba(6, 6, 6, 0.01) 0%, rgba(6, 6, 6, 0.01) 20%,rgba(210, 210, 210, 0.01) 20%, rgba(210, 210, 210, 0.01) 64%,rgba(10, 10, 10, 0.01) 64%, rgba(10, 10, 10, 0.01) 82%,rgba(72, 72, 72, 0.01) 82%, rgba(72, 72, 72, 0.01) 88%,rgba(127, 127, 127, 0.01) 88%, rgba(127, 127, 127, 0.01) 100%),linear-gradient(90deg, rgba(4, 4, 4, 0.06) 0%, rgba(4, 4, 4, 0.06) 56%,rgba(6, 6, 6, 0.06) 56%, rgba(6, 6, 6, 0.06) 65%,rgba(110, 110, 110, 0.06) 65%, rgba(110, 110, 110, 0.06) 83%,rgba(136, 136, 136, 0.06) 83%, rgba(136, 136, 136, 0.06) 100%),linear-gradient(349deg, rgba(137, 137, 137, 0.02) 0%, rgba(137, 137, 137, 0.02) 43%,rgba(112, 112, 112, 0.02) 43%, rgba(112, 112, 112, 0.02) 100%),linear-gradient(47deg, rgba(184, 184, 184, 0.06) 0%, rgba(184, 184, 184, 0.06) 36%,rgba(32, 32, 32, 0.06) 36%, rgba(32, 32, 32, 0.06) 100%),linear-gradient(83deg, rgba(222, 222, 222, 0.07) 0%, rgba(222, 222, 222, 0.07) 98%,rgba(143, 143, 143, 0.07) 98%, rgba(143, 143, 143, 0.07) 100%),repeating-linear-gradient(0deg, rgba(244, 244, 244, 0.08) 0px, rgba(244, 244, 244, 0.08) 72px,rgba(155, 155, 155, 0.08) 72px, rgba(155, 155, 155, 0.08) 179px,rgba(102, 102, 102, 0.08) 179px, rgba(102, 102, 102, 0.08) 477px,rgba(133, 133, 133, 0.08) 477px, rgba(133, 133, 133, 0.08) 580px,rgba(83, 83, 83, 0.08) 580px, rgba(83, 83, 83, 0.08) 614px),repeating-linear-gradient(135deg, rgba(115, 115, 115, 0.03) 0px, rgba(115, 115, 115, 0.03) 266px,rgba(99, 99, 99, 0.03) 266px, rgba(99, 99, 99, 0.03) 273px,rgba(115, 115, 115, 0.03) 273px, rgba(115, 115, 115, 0.03) 351px,rgba(229, 229, 229, 0.03) 351px, rgba(229, 229, 229, 0.03) 439px),repeating-linear-gradient(45deg, rgba(72, 72, 72, 0.01) 0px, rgba(72, 72, 72, 0.01) 232px,rgba(65, 65, 65, 0.01) 232px, rgba(65, 65, 65, 0.01) 345px,rgba(140, 140, 140, 0.01) 345px, rgba(140, 140, 140, 0.01) 348px,rgba(26, 26, 26, 0.01) 348px, rgba(26, 26, 26, 0.01) 547px),repeating-linear-gradient(45deg, rgba(68, 68, 68, 0.05) 0px, rgba(68, 68, 68, 0.05) 115px,rgba(182, 182, 182, 0.05) 115px, rgba(182, 182, 182, 0.05) 246px,rgba(14, 14, 14, 0.05) 246px, rgba(14, 14, 14, 0.05) 272px,rgba(80, 80, 80, 0.05) 272px, rgba(80, 80, 80, 0.05) 298px,rgba(37, 37, 37, 0.05) 298px, rgba(37, 37, 37, 0.05) 434px),repeating-linear-gradient(135deg, rgba(46, 46, 46, 0.03) 0px, rgba(46, 46, 46, 0.03) 107px,rgba(169, 169, 169, 0.03) 107px, rgba(169, 169, 169, 0.03) 182px,rgba(71, 71, 71, 0.03) 182px, rgba(71, 71, 71, 0.03) 321px,rgba(182, 182, 182, 0.03) 321px, rgba(182, 182, 182, 0.03) 359px),linear-gradient(90deg, #084da4 0%,#01aeb6 100%);
  --titles-colors: whitesmoke;
  --font-medium: bold;
}

/*! CUSTOM SCROLLBARS */


  /* width */
  ::-webkit-scrollbar {
    width: 10px;
    height: 0px;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--header-bg); 
  }
   
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--slider-colors); 
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }



/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  scroll-behavior: smooth;
}

/* Sections
   ========================================================================== */

/**
 * Remove the margin in all browsers.
 */

body {
  margin: 0;
  font-family: 'Montserrat', sans-serif;
}

/**
 * Render the main element consistently in IE.
 */

main {
  display: block;
}

/**
 * Correct the font size and margin on h1 elements within section and
 * article contexts in Chrome, Firefox, and Safari.
 */

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd em font sizing in all browsers.
 */

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
   ========================================================================== */

/**
 * Remove the gray background on active links in IE 10.
 */

a {
  background-color: transparent;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd em font sizing in all browsers.
 */

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */

small {
  font-size: 80%;
}

/**
 * Prevent sub and sup elements from affecting the line height in
 * all browsers.
 */

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */

/**
 * Remove the border on images inside links in IE 10.
 */

img {
  border-style: none;
}

/* Forms
   ========================================================================== */

/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button,
input { /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select { /* 1 */
  text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from fieldset elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    fieldset elements in all browsers.
 */

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */

textarea {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to inherit in Safari.
 */

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */

/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */

details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */

summary {
  display: list-item;
}

/* Misc
   ========================================================================== */

/**
 * Add the correct display in IE 10+.
 */

template {
  display: none;
}

/**
 * Add the correct display in IE 10.
 */

[hidden] {
  display: none;
}
`


export const Wrapper = styled.div`

  
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
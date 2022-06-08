import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export const StyledCarousel = styled(Slider)`

    max-width: 400px;
    max-height: 250px;
    /* display: inline-block; */
    /* background: red; */


.carousel-img {
    /* display: block; */
    width: 250px; 
    height: 175px;
    /* background: green; */
    img {
        max-height: 200px;
        object-fit: cover;
    }
}

@media (max-width: 640px) {
    .carousel{
        display: flex;
        max-width: 200px;
        max-height: 100px;
    }   

    .carousel-img {
        display: flex;
        width: 1%;
        height: 1%;
}
}
`
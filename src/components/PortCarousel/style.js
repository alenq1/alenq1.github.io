import styled from 'styled-components'
import { Carousel } from 'react-responsive-carousel';

export const StyledCarousel = styled(Carousel)`


    /* display: flex;
    max-width: 200px;
    max-height: 100px; */


.carousel-img {
    /* display: block; */
    width: 100%;
    /* height: 100%; */
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
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import './News.css';

const News = () => {
    return (
        <Carousel
        showArrows
        showStatus={false}
        showIndicators
        infiniteLoop
        showThumbs={false}
        useKeyboardArrows
        autoPlay
        stopOnHover
        swipeable
        dynamicHeight={false}
        emulateTouch
        autoFocus={false}
        thumbWidth={100}
        selectedItem={0}
        interval={2000}
        transitionTime={500}
        swipeScrollTolerance={5}
        ariaLabel={undefined}>
            <div key={1}>
                <img src="new_1.jpg" alt='new_1' style={{height: 800, width: 700}}/>
                {/* <p>НОВОСТЬ 1</p> */}
            </div>
            <div key={2}>
                <img src="new_2.jpg" alt='new_2' style={{height: 800, width: 700}}/>
                {/* <p>НОВОСТЬ 2</p> */}
            </div>
            <div key={3}>
                <img src="new_3.jpg" alt='new_3' style={{height: 800, width: 700}}/>
                {/* <p>НОВОСТЬ 3</p> */}
            </div>
        </Carousel>
    );
}

export default News;
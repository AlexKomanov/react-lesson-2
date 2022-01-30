import React from 'react';

const FeatureSliderItems = (props) => {



    return (
        <div className="features-slider">
            <div className="features-slider_items">

                <div className="features-slider_item">
                    <div className="features-img"><img src={require('../../images/1.svg').default}
                                                       alt='mySvgImage'/></div>
                    <div className="features-feature">Первое целевое преимущество</div>
                </div>
                <div className="features-slider_item">

                    <div className="features-img"><img src={require('../../images/2.svg').default}
                                                       alt='mySvgImage'/></div>
                    <div className="features-feature">Второе целевое преимущество</div>
                </div>
                <div className="features-slider_item">
                    <div className="features-img"><img src={require('../../images/3.svg').default}
                                                       alt='mySvgImage'/></div>
                    <div className="features-feature">Третье целевое преимущество</div>
                </div>
                <div className="features-slider_item">
                    <div className="features-img"><img src={require('../../images/4.svg').default}
                                                       alt='mySvgImage'/></div>
                    <div className="features-feature">Четвертое целевое преимущество</div>
                </div>
            </div>
            <button className="features-slider-arrow features-slider-prev">
                <svg width="9" height="16"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z">
                    </path>
                </svg>
            </button>
            <button className="features-slider-arrow features-slider-next">
                <svg width="9"
                     height="16" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z">
                    </path>
                </svg>
            </button>
        </div>
    );
};

export default FeatureSliderItems;
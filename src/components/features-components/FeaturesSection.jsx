import React from 'react';
import FeatureSliderItems from "../feature-slider-item-component/FeatureSliderItems";

const FeaturesSection = () => {
    return (
        <section className="features">
            <div className="wrapper">
                <div className="features-wrapper">
                    <h2 className="features-head">Уникальный заголовок для преимущества компании</h2>
                    <div className="features-subhead">О нас</div>
                    <div className="features-description">Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
                        сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а
                        начинающему
                        оратору отточить.
                    </div>
                    <FeatureSliderItems/>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
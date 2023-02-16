import { useState, useEffect, useCallback } from "react"

import './clinicHeader.scss';
// Social
import fb from '../../resourses/img/social/fb.svg';
import inst from '../../resourses/img/social/inst.svg';
import vk from '../../resourses/img/social/vk.svg';
import yt from '../../resourses/img/social/youtube.svg';
// Slider
import slide1 from '../../resourses/img/header/header_slider/slide_1.png';
import slide2 from '../../resourses/img/header/header_slider/slide_2.png';
import slide3 from '../../resourses/img/header/header_slider/slide_3.png';
import slide4 from '../../resourses/img/header/header_slider/slide_4.png';
import slide5 from '../../resourses/img/header/header_slider/slide_5.png';
import slide6 from '../../resourses/img/header/header_slider/slide_6.png';

const ClinicHeader = () => {

    const [actualSlide, setActualSlide] = useState(1)
    const [slider, setSlider] = useState([
        { slide: slide1 },
        { slide: slide2 },
        { slide: slide3 },
        { slide: slide4 },
        { slide: slide5 },
        { slide: slide6 },
    ])

    useEffect(() => {
        if (actualSlide === 7) {
            setActualSlide(1)
        }
        const interval = setInterval(() => {
            setActualSlide(actualSlide + 1)
        }, 10000)

        return () => {
            clearInterval(interval)
        }
    }, [actualSlide])

    const btnSlide = (slideNum) => {
        setActualSlide(slideNum)
    }

    return (
        <div className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__slide_nav_wrapper">
                        <ul className="header__slide_nav">
                            {slider.map((obj, index) => {
                                return (
                                    <li key={index} className={actualSlide === index + 1 ? "header__slide_nav_item active_slide" : "header__slide_nav_item"} onClick={() => btnSlide(index + 1)}>{index + 1}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="header__title_wrapper">
                        <h1 className="header__title">Айболит <br />круглосуточная <br />ветклиника</h1>
                        <button className="btn">ЗАПИСАТЬСЯ</button>
                        <ul className="header__social">
                            <li className="header__social_item"><img src={inst} alt="instagram" /></li>
                            <li className="header__social_item"><img src={fb} alt="facebook" /></li>
                            <li className="header__social_item"><img src={vk} alt="vk" /></li>
                            <li className="header__social_item"><img src={yt} alt="youtube" /></li>
                        </ul>
                    </div>
                    <div className="header__number"><a href="tel:+380950000000">+380 (95)-00-00-000</a></div>
                </div>
                <div className="header__slider">
                    {slider.map((obj, index) => {
                        return (
                            <img key={index} src={obj.slide} className={actualSlide === index + 1 ? "slide active__slider" : "slide"} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ClinicHeader;
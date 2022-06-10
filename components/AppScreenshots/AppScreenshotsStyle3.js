import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));
import axios from 'axios';
import baseApiUrl from '@/utils/baseApiUrl';

const options = {
    nav: true,
    loop: true,
    margin: 25,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        "<i class='ri-arrow-left-s-line'></i>",
        "<i class='ri-arrow-right-s-line'></i>",
    ],
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        768: {
            items: 3
        },
        992: {
            items: 4
        },
        1200: {
            items: 5
        }
    }
};

const AppScreenshotsStyle3 = () => {

    const [display, setDisplay] = React.useState(false);

    const [screenshots, setScreenshots] = React.useState()

    React.useEffect(() => {
        const getScreenshots = async () => {
            const response = await axios.get(`${baseApiUrl}/app-screenshots`)
            setScreenshots(response.data)
            
            // console.log(response.data)
        }

        getScreenshots()
    }, [])

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <>
            <div className="screenshots-area bg-black-color ptb-100">
                {screenshots && ( 
                    <div className="container">
                        <div className="section-title color-white">
                            <span className="sub-title">{screenshots.subTitle}</span>
                            <h2>{screenshots.title}</h2>
                        </div>

                        {display ? <OwlCarousel 
                            className="screenshots-slides owl-carousel owl-theme"
                            {...options}
                        > 
                            {screenshots.screenshots.map(screenshot => (
                                <div className="single-screenshot-item" key={screenshot.id}>
                                    <img src={screenshot.image.url} alt={screenshot.image.alternativeText} />
                                </div>
                            ))}
                        </OwlCarousel> : ''}
                    </div>
                )}
            </div>
        </>
    )
}

export default AppScreenshotsStyle3;
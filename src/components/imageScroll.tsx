import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export const ImageScroll: any = () => {
    const blocks: any = () => {
        return (
            <>
                <div className="imgblock"><img src="https://cataas.com/cat" alt="cat" /></div>
                <div className="imgblock"><img src="https://cataas.com/cat" alt="cat" /></div>
                <div className="imgblock"><img src="https://cataas.com/cat" alt="cat" /></div>
                <div className="imgblock"><img src="https://cataas.com/cat" alt="cat" /></div>
                <div className="imgblock"><img src="https://cataas.com/cat" alt="cat" /></div>
            </>
        )
    };

    return (
        <Carousel className='imgScroll' autoPlay={true} infiniteLoop={true} transitionTime={.2}>
            <div className="imgblock">
                <img src="https://cataas.com/cat" alt="cat" />
            </div>
            <div className="imgblock" >
                <img src="https://cataas.com/cat" alt="cat" />
            </div >
            <div className="imgblock">
                <img src="https://cataas.com/cat" alt="cat" />
            </div>
            <div className="imgblock">
                <img src="https://cataas.com/cat" alt="cat" />
            </div>
            <div className="imgblock">
                <img src="https://cataas.com/cat" alt="cat" />
            </div>
        </Carousel>
    );
}

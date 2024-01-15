import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";

function ImageCarousel({ pics, showFullscreenButton=true, onClick=null  }){
    const [isFullscreen, setIsFullscreen] = useState(false);
    

    function fullscreenHandler() {
        const homeTabs = document.querySelector('.homeTabs');
        const navTabs = document.querySelector('.dropdown');
        const container = document.querySelector('.image-gallery-fullscreen-button');

        if(container){
            container.addEventListener('click', () => {
                setIsFullscreen((current) => !current);
            })
        }

        const viewportWidth = window.innerWidth;

        if (isFullscreen === true) {
            if(homeTabs) homeTabs.classList.add('hidden');
            if(navTabs) navTabs.classList.add('hidden');
        } else {
            if(homeTabs) {
                homeTabs.classList.remove('hidden')
            }
            if(navTabs) navTabs.classList.remove('hidden');
        }
    }

    useEffect(() => {
        fullscreenHandler();
    }, [isFullscreen]);

    return (
        <div className='carousel-wrapper'>
            <ImageGallery 
                items={pics} 
                showFullscreenButton={showFullscreenButton} 
            />
      </div>
    )
}

export default ImageCarousel
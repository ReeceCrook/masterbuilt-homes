import React, { useState, useRef } from "react";
import ImageGallery from "react-image-gallery";

function ImageCarousel({ pics, showFullscreenButton = true }) {
    const [isFullScreen, setIsFullScreen] = useState(false);
    const galleryRef = useRef(null);

    const toggleFullScreen = () => {
        if (galleryRef.current) {
            if (!isFullScreen) {
                galleryRef.current.fullScreen();
            } else {
                document.exitFullscreen();
            }
        }
    };

    const handleImageClick = () => {
        toggleFullScreen();
    };

    const handleScreenChange = (isFullscreen) => {
        setIsFullScreen(isFullscreen);
    };

    return (
        <div className={isFullScreen ? "fullscreen" : "carousel-wrapper"}>
            <ImageGallery
                ref={galleryRef}
                items={pics.map(pic => ({
                    original: pic.original,
                    thumbnail: pic.thumbnail,
                    renderItem: () => (
                        <img
                            src={pic.original}
                            alt="Townhome Images"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    )
                }))}
                showFullscreenButton={showFullscreenButton}
                onScreenChange={handleScreenChange}
                onClick={handleImageClick}
                showPlayButton={false}
            />
        </div>
    );
}

export default ImageCarousel;

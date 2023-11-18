import React, {useRef} from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import HoverVideoPlayer from 'react-hover-video-player';
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import img1 from "../images/carousel-onwardd.jpg";
import video1 from '../videos/video1.mp4'; // Assuming you have videos instead of images
import video2 from '../videos/video2.mp4';
import video3 from '../videos/video3.mp4';
import video4 from '../videos/video4.mp4';

// Main Slideshow Component
const Slideshow = () => {
    // Define the list of video sources
    const videos = [video1, video2, video3, video4];

    return (
        <div className="Slideshow">
            {/* Carousel Component with video sources as props */}
            <Carousel videos={videos} />
        </div>
    );
}

// Carousel Component which wraps all elements related to the carousel
const Carousel = ({ videos }) => (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        {/* Component to render carousel indicators */}
        <CarouselIndicators videos={videos} />

        {/* Rendering of each video */}
        <div className="carousel-inner">
            {videos.map((video, index) => (
                <CarouselItem key={index} video={video} isActive={index === 0} />
            ))}
        </div>

        {/* Navigation buttons for carousel */}
        <CarouselNav direction="prev" target="#carouselExampleIndicators" />
        <CarouselNav direction="next" target="#carouselExampleIndicators" />
    </div>
);

// Component to render carousel indicators
const CarouselIndicators = ({ videos }) => (
    <div className="carousel-indicators">
        {videos.map((_, index) => (
            <button 
                key={index}
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={index}
                className={index === 0 ? 'active' : ''}
                aria-current={index === 0 ? 'true' : undefined}
                aria-label={`Slide ${index + 1}`}
            ></button>
        ))}
    </div>
);


// Component to render individual carousel items with videos
const CarouselItem = ({ video, isActive }) => {
    const videoRef = useRef(null); // Create a ref for the video element

    // Function to handle video play/pause
    const toggleVideoPlay = () => {
        const videoElement = videoRef.current;
        if (videoElement.paused) {
            videoElement.play();
        } else {
            videoElement.pause();
        }
    };

    return (
        <div className={`carousel-item ${isActive ? 'active' : ''}`} style={{ position: 'relative' }}>
            <video 
                className="d-block w-100" 
                autoPlay 
                muted
                loop 
                playsInline 
                ref={videoRef} // Attach the ref
                onClick={toggleVideoPlay} // Handle click to play/pause
            >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {/* Overlay image */}
            <img 
                src={img1} 
                alt="Overlay" 
                style={{ 
                    position: 'absolute', 
                    top: 120, 
                    left: 200, 
                    width: '40%', 
                    height: '40%', 
                    objectFit: 'cover',
                    zIndex: 1,
                    
                }} 
            />
        </div>
    );
};




// Navigation buttons (prev/next) for carousel
const CarouselNav = ({ direction, target }) => (
    <button className={`carousel-control-${direction}`} type="button" data-bs-target={target} data-bs-slide={direction}>
        <span className={`carousel-control-${direction}-icon`} aria-hidden="true"></span>
        <span className="visually-hidden">{capitalizeFirstLetter(direction)}</span>
    </button>
);

// Utility function to capitalize the first letter of a string
const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);


export default Slideshow;

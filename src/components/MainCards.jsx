import React, {useState, useEffect} from 'react';
import HoverVideoPlayer from 'react-hover-video-player';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import storage from '../firebase.js';

// Importing static assets (images and videos)
// import vid1 from '../videos/1564674844-disney.mp4';
// import vid2 from '../videos/1564676115-marvel.mp4';
// import vid3 from '../videos/1564676714-pixar.mp4';
// import vid4 from '../videos/1608229455-star-wars.mp4';
// import vid5 from '../videos/1564676296-national-geographic.mp4';

// Single Card component to display a video with an overlay image.
const Card = ({ videoSrc, imageSrc }) => {
    return (
    <div className="col-lg-2 col-md-6">
        <div className="card main-card">
            <HoverVideoPlayer
                className='hovervideoplayer'
                videoSrc={videoSrc}
                overlayTransitionDuration={100000}
                // Display the image when the video is paused
                pausedOverlay={<img src={imageSrc} alt="" className='card-img-top'/>}
                // Loading state overlay
                loadingOverlay={
                    <div className="loading-spinner-overlay">Loading</div>
                }
            />
        </div>
    </div>
)};

const MainCards = () => {
    // State to store the card data
    const [cardData, setCardData] = useState([]);
    const storage = getStorage();

    useEffect(() => {
        const imageRefs = ['images/viewers-disney.png', 'images/viewers-marvel.png', 'images/viewers-pixar.png', 'images/viewers-starwars.png', 'images/viewers-national.png'];

        const videoRefs = ['videos/1564674844-disney.mp4', 'videos/1564676115-marvel.mp4', 'videos/1564676714-pixar.mp4', 'videos/1608229455-star-wars.mp4', 'videos/1564676296-national-geographic.mp4'];

        Promise.all([
            Promise.all(imageRefs.map(imageRef => getDownloadURL(ref(storage, imageRef)))),
            Promise.all(videoRefs.map(videoRef => getDownloadURL(ref(storage, videoRef))))
        ])
        .then(([imageUrls, videoUrls]) => {
            const newCardData = imageUrls.map((url, index) => ({
                image: url,
                video: videoUrls[index], // Ensure the same order as images
            }));
            setCardData(newCardData);
        })
        .catch(error => {
            console.error("Error fetching URLs: ", error);
            // Handle errors here, such as setting a fallback URL or error state
        });
    }, []);
  
    return (
        // Render a row of cards by mapping over the cardData array
        <div className="row">
            {cardData.map((data, idx) => (
                // The Card component is reused for each item in the cardData array
                <Card key={idx} videoSrc={data.video} imageSrc={data.image} />
            ))}
        </div>
    );
}


export default MainCards;

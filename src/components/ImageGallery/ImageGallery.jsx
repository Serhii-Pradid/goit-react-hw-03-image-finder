import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import "./ImageGallery.css";

export const ImageGallery = ({images, openModal}) => (

    <ul className="ImageGallery">
        {images.map(({id, webformatURL, largeImageURL}) => (
                <ImageGalleryItem 
                key={id}
                src={webformatURL}
                largeImageURL={largeImageURL}
                openModal={openModal} />
        
        ))}
    </ul>
);
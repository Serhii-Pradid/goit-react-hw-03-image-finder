import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import "./ImageGallery.css";

export const ImageGallery = ({images}) => (

    <ul className="ImageGallery">
        {images.map(({id, webformatURL, largeImageURL}) => (
                <ImageGalleryItem 
                key={id}
                src={webformatURL}
                largeImageURL={largeImageURL} />
        
        ))}
    </ul>
);
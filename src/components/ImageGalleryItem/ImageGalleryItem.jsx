import './ImageGalleryItem.css'

export const ImageGalleryItem = ({src, alt, largeImageURL, openModal}) => (
    <li className="ImageGalleryItem" onClick={() => openModal(largeImageURL)}>
      <img src={src} alt={alt} className="ImageGalleryItem-image" />
    </li>
)
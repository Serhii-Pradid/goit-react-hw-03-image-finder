import './ImageGalleryItem.css'

export const ImageGalleryItem = ({src, alt}) => (
    <li className="ImageGalleryItem">
      <img src={src} alt={alt} className="ImageGalleryItem-image" />
    </li>
)
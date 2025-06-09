import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={styles['image-gallery']}>
      {images.map((image) => {
        const { id, urls, alt_description, width, height, location } = image;
        const orientation = width > height ? 'landscape' : 'portrait';

        return (
          <li key={id} className={orientation} onClick={() => onImageClick(image)}>
            <img src={urls.small} alt={alt_description || 'image'} />
            <p>Location: {location?.name || 'Unknown'}</p>
          </li>
        );
      })}
    </ul>
  );
};
export default ImageGallery;
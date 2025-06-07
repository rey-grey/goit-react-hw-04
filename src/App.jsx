import './App.css';
import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { Toaster, toast } from 'react-hot-toast';
import { SearchBar } from './component/SearchBar/SearchBar.jsx';
import { ImageGallery } from './component/ImageGallery/ImageGallery.jsx';
import { Loader } from './component/Loader/Loader.jsx';
import { ErrorMessage } from './component/ErrorMessage/ErrorMessage.jsx';
import { LoadMoreButton } from './component/LoadMoreBtn/LoadMoreBtn.jsx';
import { fetchImages } from './component/ApiImg/ApiImg.jsx';  
import { ImageModal } from './component/ImageModal/ImageModal.jsx';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [totalPages, setTotalPages] = useState(null);

  useEffect(() => {
    if (!query) return;

    const loadImages = async () => {
      try {
        setIsLoading(true);
        const { images: fetchedImages, totalPages: fetchedTotalPages } = await fetchImages(query, page);

        if (fetchedImages.length === 0) {
          toast.error(`No results found for "${query}"`);
          return;
        }
        
        setImages(prev => [...prev, ...fetchedImages]);
        setTotalPages(fetchedTotalPages);
      } catch (error) {
        setError(error.message || 'Something went wrong');
      } finally {
        setIsLoading(false);
      }
    };

    loadImages();
  }, [query, page]);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
    setError(null);
  };

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  const openModal = (image) => {
    setSelectedImage({
      src: image.urls.regular, 
      alt: image.alt_description || 'Image',
      location: image.user.location || 'Unknown',
      
    });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
       <Toaster position="top-right" reverseOrder={false} />
      <SearchBar onSubmit={handleSearch} />
      
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={openModal} />
      
      {isLoading && <Loader />}
      
      {!isLoading && images.length > 0 && page < totalPages && (
      <LoadMoreButton onClick={handleLoadMore} />
)}

      {selectedImage && (
        <ImageModal
          isOpen={true}
          onClose={closeModal}
          src={selectedImage.src}
          alt={selectedImage.alt}
          location={selectedImage.location}
          
        />
      )}
    </>
  );
}

export default App;

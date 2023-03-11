import ImageGallery from 'react-image-gallery';
import morra from '../assets/morra.jpg'
import rammus from '../assets/rammus.png'
const images = [
    {
      original: morra,
      description: 'Descripción de la imagen 1'
    },
    {
      original: rammus,
      description: 'Descripción de la imagen 2',
    },
    // ...más imágenes
  ];
  function MyGallery() {
    return (
      <ImageGallery 
      style={{ backgroundColor: "#f9f9f9", border: "1px solid #ccc" }}
  items={images}
       />
    );
  }
export default MyGallery;  
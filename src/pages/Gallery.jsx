import Footer from '../components/Footer'
import Menu from '../components/Menu'
import './Gallery.css'

const Gallery = () => {
  return (
    <div className="container">
      <Menu />
      <h1 className='gallery-title'>Galeria</h1>
      <div className="image-row">
        <img src="public/3picGallery.jpg" alt="" className="gallery-imagen" />
        <img src="public/1picGallery.jpeg" alt="" className="gallery-imagen" />
        <img src="public/4picGallery.jpeg" alt="" className="gallery-imagen" />
      </div>
      <Footer />
    </div>
  )
}

export default Gallery
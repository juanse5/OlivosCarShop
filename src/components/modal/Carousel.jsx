import '../../styles/modal/Carousel.css';
import '../../styles/modal/CarouselFullScreen.css'
import React, { useRef, useState, useEffect } from 'react';

const Carousel = ({ images }) => {
    const carouselRef = useRef(null);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [fullscreenIndex, setFullscreenIndex] = useState(null); // Índice de la imagen seleccionada para fullscreen

    useEffect(() => {
        if (!carouselRef.current) return;
        const carousel = carouselRef.current;
        const slides = carousel.querySelectorAll('.carousel-slide');
        let currentIndex = 0;

        const showSlide = (index) => {
            slides.forEach((slide, idx) => {
                slide.style.display = idx === index ? 'block' : 'none';
            });
        };

        const nextSlide = () => {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        };

        const prevSlide = () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        };

        const nextButton = carousel.querySelector('.carousel-next');
        const prevButton = carousel.querySelector('.carousel-prev');

        nextButton.addEventListener('click', nextSlide);
        prevButton.addEventListener('click', prevSlide);

        showSlide(currentIndex);

        return () => {
            nextButton.removeEventListener('click', nextSlide);
            prevButton.removeEventListener('click', prevSlide);
        };
    }, []);

    const handleImageClick = (index) => {
        setFullscreenIndex(index); // Establece el índice de la imagen seleccionada
        setIsFullscreen(true); // Activa el modo fullscreen
    };

    const handleCloseFullscreen = (e) => {
        e.stopPropagation();
        setIsFullscreen(false);
        setFullscreenIndex(null); // Limpia el índice seleccionado
    };

    const handleNextFullscreen = (e) => {
        e.stopPropagation();
        setFullscreenIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrevFullscreen = (e) => {
        e.stopPropagation();
        setFullscreenIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <>
            {isFullscreen && fullscreenIndex !== null && (
                <div className="carousel-fullscreen" onClick={handleCloseFullscreen}>
                    <button className="carousel-prev fullscreen-button" onClick={handlePrevFullscreen}>←</button>
                    <img 
                        src={images[fullscreenIndex]} 
                        alt={`Imagen ${fullscreenIndex + 1} en modo pantalla completa`} 
                        className="fullscreen-image" 
                    />
                    
        
                    <button className="carousel-next fullscreen-button" onClick={handleNextFullscreen}>→</button>
                    <button className="close-fullscreen-button" onClick={handleCloseFullscreen}>×</button>
                </div>
            )}

            <div className="carousel" ref={carouselRef}>
                <button className="carousel-prev">←</button>
                <div className="carousel-slides">
                    {images.map((url, index) => (
                        <div 
                            key={index} 
                            className="carousel-slide" 
                            onClick={() => handleImageClick(index)}
                        >
                            <img src={url} alt={`Slide ${index + 1}`} className="carousel-image" />
                        </div>
                    ))}
                       <h2 id='marca-de-agua'>OLIVOS CAR SHOP</h2>
                </div>
                <button className="carousel-next">→</button>
            </div>
        </>
    );
};

export default Carousel;
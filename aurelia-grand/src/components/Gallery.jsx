import "../App.css";
import { useEffect, useState } from "react";

const slides = [
  {
    alt: "Infinity Pool",
    src: "https://wallpapers.com/images/hd/infinity-pool-by-the-beach-tropical-desktop-hvn4d8hecbzo6fj0.jpg",
  },
  {
    alt: "Bar",
    src: "https://wallpaper.forfun.com/fetch/6a/6af549ad3139ec46315f0d55364a82c2.jpeg",
  },
  {
    alt: "Gym",
    src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltfGVufDB8MHwwfHx8MA%3D%3D",
  },
  {
    alt: "Water Sports",
    src: "https://c1.wallpaperflare.com/preview/844/457/235/jet-boat-jet-ski-runabout-water-sports.jpg",
  },
  {
    alt: "Massage",
    src: "https://c1.wallpaperflare.com/preview/925/133/204/cosmetology-luxury-grand-formosa-regent-hot-springs-indoor.jpg",
  },
];

export const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white p-5 flex flex-col items-center text-black">
      <h1 className="font-heading pt-[12vh] text-[40px]">Amenities</h1>
      <section
        id="gallery"
        className="relative h-full w-screen overflow-hidden text-white"
      >
        <div className="flex items-center justify-center px-4 py-8">
          <div className="max-w-4xl w-full rounded-3xl overflow-hidden  border border-white/10">
            <div className="relative h-full min-h-[420px]">
              {slides.map((slide, index) => (
                <img
                  key={slide.alt}
                  src={slide.src}
                  alt={slide.alt}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Go to slide ${index + 1}`}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-3 w-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-white"
                        : "bg-white/40 hover:bg-white"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-screen flex justify-center p-5">
          <div className="text-center w-[700px] text-black font-text">
            Designed to elevate every moment of your stay, our collection of
            premium amenities offers the perfect balance of relaxation,
            adventure, and indulgence. Whether you prefer unwinding by the
            infinity pool, rejuvenating at the spa, maintaining your fitness
            routine, or exploring the ocean through exciting water activities,
            every experience is thoughtfully curated to deliver exceptional
            comfort and unforgettable memories.
          </div>
        </div>
      </section>
    </div>
  );
};

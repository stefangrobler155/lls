type FeaturedGallerySliderProps = {
  images: string[];
};

export default function FeaturedGallerySlider({ images }: FeaturedGallerySliderProps) {
  if (!images || images.length === 0) return null;

  return (
    <section className="bg-white mb-12">
      <div className="flex flex-col items-center justify-center max-w-7xl mx-auto px-4">
        {/* Title and Description */}
        <div className="text-center mb-12">
              <h2 className="text-3xl text-gray-900 mb-4">Recent Work</h2>
              <p className="max-w-2xl text-gray-700 text-lg mb-4">
                Explore a curated selection of our most recent wedding, engagement, and family sessions.
              </p>
        </div>
        {/* Slider Container */}     
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="">
            {/* Column 1: Text Content */}
            <div className="text-center md:text-left align-top">
              
              <p className="text-gray-900 text-lg mb-4 text-center sm-px-8 md:px-8">
                We believe every photo tells a story. Here’s a glimpse into the moments we’ve had the
                honor to capture — full of joy, love, and authenticity.
              </p>

            </div>
          </div>
          <div className="">
          {/* Column 2: Slider */}
          <div className="overflow-hidden">
            <div className="flex gap-4 animate-scroll-loop whitespace-nowrap w-max">
              {[...images, ...images].map((url, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-64 h-48 rounded-lg overflow-hidden shadow"
                >
                  <img src={url} alt={`Slide ${index}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>



          </div>
        </div>
        
        
      </div>
    </section>
  );
}

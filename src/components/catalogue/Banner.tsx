import Image from "next/image";
import sliderImg1 from "../../images/slider/sliderImg_1.jpg";

const Banner = () => {
  return (
    <div className="relative bg-gray-100 h-80">
      {/* Image Next.js avec style ajusté */}
      <Image
        src={sliderImg1}
        alt="Banner Image"
        layout="fill" // Remplit l'espace du conteneur parent
        objectFit="cover" // Garde le ratio tout en couvrant entièrement le conteneur
        objectPosition="center" // Centrer l'image
        priority // Charger l'image en priorité (utile pour les images au-dessus de la ligne de flottaison)
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white text-4xl font-bold mb-4">
            Template for your business
          </h1>
          <button className="bg-red-500 text-white px-6 py-2 rounded-md">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import imageOne from '../../assets/image-menu/img1.png';
import imageTwo from '../../assets/image-menu/img2.png';
import imageThree from '../../assets/image-menu/img3.png';
import imageFour from '../../assets/image-menu/img4.png';
import imageFive from '../../assets/image-menu/img5.png';
import imageSix from '../../assets/image-menu/img6.png';
import '../../AddItem.css';

export default function MenuMinuman() {
  const products = [
    {
      id: 1,
      image: imageOne,
      name: 'Es Dawet',
      description: 'Dawet Ayu Banjarnegara',
      price: 'Rp. 8.000',
    },
    {
      id: 2,
      image: imageTwo,
      name: 'Jus Jambu',
      description: 'Jus Buah Jambu Biji',
      price: 'Rp. 6.000',
    },
    {
      id: 3,
      image: imageThree,
      name: 'Jus Jeruk',
      description: 'Jus Buah Jeruk',
      price: 'Rp. 6.000',
    },
    {
      id: 4,
      image: imageFour,
      name: 'Jus Alpukat',
      description: 'Jus Buah Alpukat',
      price: 'Rp. 6.000',
    },
    {
      id: 5,
      image: imageFive,
      name: 'Jus Mangga',
      description: 'Jus Buah Mangga',
      price: 'Rp. 6.000',
    },
    {
      id: 6,
      image: imageSix,
      name: 'Sari Kacang Ijo',
      description: 'Sari Kacang Ijo',
      price: 'Rp. 6.000',
    },
  ];

  return (
    <div className="grid h-screen grid-cols-2 md:grid-cols-3 justify-items-center items-center space-y-5 px-5 py-8 md:space-y-0 md:gap-y-14 md:px-20 md:py-16">
      {products.map((product) => (
        <div
          key={product.id}
          className="w-40 md:w-80 h-60 md:h-auto bg-white rounded-2xl shadow-md"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full md:h-48 object-cover rounded-t-2xl"
          />
          <div className="px-4 py-2">
            <h2 className="poppins text-sm md:text-lg font-bold">{product.name}</h2>
            <p className="text-xs md:text-sm text-gray-600 mt-1 md:mt-2">{product.description}</p>
            <p className="text-md font-semibold text-orange-600 mt-3">
              {product.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

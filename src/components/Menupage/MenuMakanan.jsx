import imageOne from '../../assets/image-menu/image1.png';
import imageTwo from '../../assets/image-menu/image2.png';
import imageThree from '../../assets/image-menu/image3.png';
import imageFour from '../../assets/image-menu/image4.png';
import imageFive from '../../assets/image-menu/image5.png';
import '../../AddItem.css';

export default function MenuMakanan() {
  const products = [
    {
      id: 1,
      image: imageOne,
      name: 'Ayam Goreng Krispi',
      description: '1 Porsi Ayam Goreng Krispi',
      price: 'Rp. 8.500',
    },
    {
      id: 2,
      image: imageTwo,
      name: 'Ayam Geprek Sambal Ijo',
      description: 'Ayam Geprek + Nasi + Lalapan',
      price: 'Rp. 10.000',
    },
    {
      id: 3,
      image: imageThree,
      name: 'Ayam Geprek Saus Mentega',
      description: 'Ayam Geprek + Nasi + Lalapan',
      price: 'Rp. 12.000',
    },
    {
      id: 4,
      image: imageFour,
      name: 'Ayam Geprek Sambal Matah',
      description: 'Ayam Geprek + Nasi + Lalapan',
      price: 'Rp. 12.000',
    },
    {
      id: 5,
      image: imageFive,
      name: 'Paket 1',
      description: 'Ayam + Nasi + Tahu + Tempe + Lalapan',
      price: 'Rp. 13.000',
    },
    {
      id: 6,
      image: imageTwo,
      name: 'Paket 2',
      description: 'Ayam Geprek + Nasi + Lalapan',
      price: 'Rp. 10.000',
    },
  ];

  return (
    <div className="grid h-screen grid-cols-2 md:grid-cols-3 justify-items-center items-center space-y-5 px-5 py-8 md:space-y-0 md:px-20 md:py-16">
      {products.map((product) => (
        <div
          key={product.id}
          className="w-40 md:w-80 h-52 md:h-auto bg-white rounded-2xl shadow-md"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full md:h-36 object-cover rounded-t-2xl"
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

import Sejarah from '../../assets/sejarah.png';
import '../../AddItem.css';

export default function BodyHomeTwo() {

  const titleText = `
  5 tahun Ayam Geprek Bu Siti berkomitmen menyajikan menu makanan dengan cita rasa terbaik.`

  const descText = `
  Berdiri sejak tahun 2019, kami telah berkomitmen menyajikan ayam geprek 
  dengan cita rasa terbaik, pedas menggugah selera, dan kualitas bahan terbaik. 
  Dari dapur kecil hingga berkembang menjadi pilihan favorit pelanggan, kepercayaan 
  Anda adalah semangat kami untuk terus berinovasi.`

  return(
    <div className="px-16 pt-20">
      <div className="flex flex-col justify-center items-center">
        <p className="montserrat text-5xl font-semibold text-center px-40">{titleText}</p>
        <p className='montserrat text-xl text-center px-72 pt-12'>{descText}</p>
        <img src={Sejarah} alt='Logo' className='pt-32'/>
      </div>
    </div>
  )
}
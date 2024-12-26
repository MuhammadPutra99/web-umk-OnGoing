import FonRend from '../../assets/font_rend3.png';
import FonRend2 from '../../assets/font_rend 4.png';
import Sugeng from '../../assets/sugeng.png';
import Nasi from '../../assets/nasi.png';
import '../../AddItem.css';

export default function BodyHome() {

  const descText = `
  "Ide ini lahir dari dapur saya, di sana saya mendapatkan banyak masakan-makanan 
  yang sudah terlahir dari keahlian saya. Ini adalah kesempatan untuk memperkenalkan 
  kepada banyak orang melalui bisnis ini."`

  return (
    <div name='bodyhome' className="px-12 pt-5">
      <div className="flex flex-row justify-center items-center gap-x-16 px-8">
        <img src={FonRend} alt='Font-rend3' className='h-28'/>
        <img src={Sugeng} alt='Sugeng' className='h-24 relative bottom-4'/>
      </div>

      <div className='flex flex-row justify-center gap-x-5 px-8'>
        <img src={FonRend2} alt='Font-rend4' className='h-28 absolute right-72 pr-10'/>
        <img src={Nasi} alt='Nasi' className='nasi'/>
      </div>

      <div className='flex justify-center text-center whitespace-pre-wrap'>
        <p className='text-xs md:text-sm font-normal italic'>{descText}</p>
      </div>
    </div>
  )
}
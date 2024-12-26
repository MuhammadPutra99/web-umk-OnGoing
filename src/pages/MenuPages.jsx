import BodyMenuFour from "../components/Menupage/BodyMenuFour";
import BodyMenuOne from "../components/Menupage/BodyMenuOne";
import BodyMenuThree from "../components/Menupage/BodyMenuThree";
import BodyMenuTwo from "../components/Menupage/BodyMenuTwo";
import FooterMenu from "../components/Menupage/FooterMenu";
import HeaderMenu from "../components/Menupage/HeaderMenu";
import MenuCamilan from "../components/Menupage/MenuCamilan";
import MenuMakanan from "../components/Menupage/MenuMakanan";
import MenuMinuman from "../components/Menupage/MenuMinuman";
import NavbarMenu from "../components/Menupage/NavbarMenu";

export default function MenuPages() {
  return (
    <>
      <div className="bg-orange-500 h-screen overflow-hidden flex flex-col">
        <NavbarMenu />
        <HeaderMenu />
      </div>

      <div className="bg-white">
        <BodyMenuOne/>
      </div>

      <div className="bg-white pb-32 md:pb-12">
        <BodyMenuTwo/>
        <MenuMakanan/>
      </div>

      <div className='flex flex-row justify-between w-full px-8 md:px-28'>
        <div className='w-1/3 h-[0.5px] bg-black shadow-2xl'></div>
        <div className='w-1/3 h-[0.5px] bg-black shadow-2xl'></div>
      </div>

      <div className="bg-white pt-2 md:pt-8 md:pb-24">
        <BodyMenuThree/>
        <MenuMinuman/>
      </div>

      <div className='flex flex-row justify-between w-full px-8 md:px-28'>
        <div className='w-1/3 h-[0.5px] bg-black shadow-2xl'></div>
        <div className='w-1/3 h-[0.5px] bg-black shadow-2xl'></div>
      </div>

      <div className="bg-white pt-2 md:pt-8 pb-36">
        <BodyMenuFour/>
        <MenuCamilan/>
      </div>

      <div className="w-full h-[0.5px] bg-black"></div>

      <div className="pt-14">
        <FooterMenu/>
      </div>
    </>
  );
}
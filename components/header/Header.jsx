import { useState , useEffect, Children } from "react";
import Wrapper from "../wrapper/Wrapper";
import Image from "next/image";
// import img1 from '@/public/src/logo.svg';
import Link from "next/link";
import Menu from "../menu/Menu";
import MenuMobile from "../menumobile/menuMobile";


import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";





function Header(){
    const [mobileMenu , setmobileMenu] =useState(false);
    const [showCatMenu , setshowCatMenu]= useState(false);
    const [show , setShow] =useState("translate-y-0");
    const [lastScrollY , setlastScrollY ] =useState(0);


    const controlNavbar=()=>{
        if(window.scrollY > 200 ){
            
            if(window.scrollY > lastScrollY && !mobileMenu){
                setShow("-translate-y-[80px]");
            }
            else{
                setShow("shadow-sm");
            }
        }
        else{
            setShow("translate-y-0");
        }
        setlastScrollY(window.scrollY)
    }

    useEffect(()=>{
        window.addEventListener("scroll",controlNavbar);
        return () =>{
            window.removeEventListener("scroll",controlNavbar);
        }
    },[lastScrollY])



    return(

        <div className={`w-full h-[50px] md:h-[80px] bg-white-600 flex items-center justify-between sticky top-0 
        transition-transform duration-300 ${show}`}>

            <Wrapper className="h-[60px] flex justify-between items-center" 
            childern={
               <>
            <Link href="/">
                <img src="../src/logo.svg " className=" pt-4 w-[40px] md:w-[60px] " />
                
            </Link>
            <Menu showCatMenu={showCatMenu}  setshowCatMenu={setshowCatMenu}/>

           
{/* showCatMenu={showCatMenu}  setshowCatMenu={setshowCatMenu} setmobileMenu={setmobileMenu}*/}
            {mobileMenu && (
                <MenuMobile 
                showCatMenu={showCatMenu}  
                setshowCatMenu={setshowCatMenu} 
                setmobileMenu={setmobileMenu}
                />
           )}
           
            <div className="flex items-center gap-2 text-black"> 
                {/* ICON-HEART-START*/}
                <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05]
                cursor-pointer relative">

                    <IoMdHeartEmpty className="text-[19px] md:text-[24px]"/>

                    <div className="h-[14px] md:h-[18px]  min-w-[14px] md:min-w-[10px]
                    rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white 
                    text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                    34</div>

                </div>
                {/* ICON-HEART-END*/}

                {/* ICON-CART-START*/}
                <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05]
                cursor-pointer relative">

                    <BsCart className="text-[15px] md:text-[20px]"/>

                    <div className="h-[14px] md:h-[18px]  min-w-[14px] md:min-w-[10px]
                    rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white 
                    text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                    8</div>

                </div>
                {/* ICON-CART-END*/}

                {/* ICON-FOR-MOBILE-START*/}
                <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05]
                cursor-pointer relative -mr-2">
                    {mobileMenu ? 
                    ( <VscChromeClose className="text-[16px]"
                     onClick={()=>setmobileMenu(false) }/>
                    ) :(
                        <BiMenuAltRight className="text-[20px]"
                        onClick={()=>setmobileMenu(true) }/>
                    )}

                </div>
                {/* ICON-FOR-MOBILE-START*/}
                
            </div>
            </> 
            }/>
        </div>
    )
}

export default Header
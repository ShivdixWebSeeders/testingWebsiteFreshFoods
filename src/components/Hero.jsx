import { useContext } from 'react';
import heroPlate from '../assets/images/hero-plate.png';
import Header from './Header'
import '../assets/styles/Hero.css'
import UIContext from '../context/UIContext';

export default function Hero() {
    const {width} = useContext(UIContext);
    return (<div clasName="bg-gray-600">
        <Header />

    {width>768?<div className="absolute md:hidden md:z-0 theCornerCircle h-[700px] w-[700px] bg-[#cbe56a] rounded-full z-[-1]"/>:""}
        <section className="flex flex-col md:flex-row items-center justify-between px-8 py-12 relative">
            <div className="max-w-xl theHeroIntro">
                <h1 className="text-4xl font-bold mb-4">
                    <span className="text-[#5E8001] font-extrabold">Eat</span> Healthy<br />
                    Live <span className="text-[#5E8001] font-extrabold">Healthy</span>
                </h1>
                <p className="mb-6 text-[#767676]  text-2xl	">
                    We providing you the fresh, organic and chemical free foods to your doorstep as your needs.
                </p>
                <button className="bg-[#5E8001] font-extrabold text-white px-6 py-2 rounded-3xl font-semibold shadow hover:bg-lime-800 transition">
                <svg xmlns="http://www.w3.org/2000/svg" 
     viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" 
     stroke-linecap="round" stroke-linejoin="round" className="w-6 h-6 text-white-700 inline ">
  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.88 19.88 0 01-8.63-3.07 
           19.5 19.5 0 01-6-6A19.88 19.88 0 013.08 4.18 
           2 2 0 015 2h3a2 2 0 012 1.72 
           12.05 12.05 0 001.1 3.49 
           2 2 0 01-.45 2.11L9.91 10.09a16 16 0 006 6l.77-.77
           a2 2 0 012.11-.45 12.05 12.05 0 003.49 1.1 
           2 2 0 011.72 2z" />

  <path d="M15 5s1.5-2 4-2" />
  <path d="M15 9s3-3.5 6-3.5" />
</svg>

                  <span>
                   {" "}  Call for Details
                    </span> 
                </button>
            </div>
            <div className="mt-8 md:mt-0">
                <img src={heroPlate} alt="Vegetable Plate" className="w-96" />
                <div className="absolute top-50 right-100 bg-[#5E8001] w-[300px] h-[100px] flex flex-col rounded-2xl shadow px-4 py-2 text-sm text-white">
                    <div className="font-semibold">Vegetable Bundle</div>
                    <div>5kg of various vegetables</div>
                    <div className="text-white-700 font-bold float-end mt-auto">
                        <span className='float-left'>Only at BDT. 299</span>
                        <button className='rounded-xl float-right bg-white text-[#111] p-1 px-2 hover:bg-[#eee] hover:text-black'>Buy Now</button>
                    </div>
                </div>
            </div>
      </section>

      <div className=" textBottom max-w-[100%]   text-center">
            <p className="mb-6 text-[#767676] mx-auto max-w-[25%] text-2xl	">
                Get fresh foods for you family <span className='font-bold'>anytime
                </span>  and <span className='font-bold'>anywhere
                </span>
            </p>

        </div>  
    </div>
    );
}

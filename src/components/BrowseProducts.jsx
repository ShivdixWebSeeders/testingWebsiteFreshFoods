import { useState, useRef } from "react";
import '../assets/styles/BrowseProduct.css'
const vegi = require("../assets/images/cucumbers.png")
const categories = [
  "All", "Asparagus", "Avocados", "Beans", "Broccolis", "Ciluliflowers", "Carrots", "Celery", "Other"
];

const products = [
  {
    name: "Cauliflower",
    price: 25,
    img: "/assets/cauliflower.png",
    category: "Cauliflowers"
  },
  {
    name: "Asparagus",
    price: 32,
    img: "/assets/asparagus.png",
    category: "Asparagus"
  },
  {
    name: "Carrots",
    price: 22,
    img: "/assets/carrots.png",
    category: "Carrots"
  },
  {
    name: "Tomatos",
    price: 25,
    img: "/assets/tomato.png",
    category: "Other"
  },
  {
    name: "Onions - brown",
    price: 28,
    img: "/assets/onion-brown.png",
    category: "Other"
  },
  {
    name: "Avocados",
    price: 45,
    img: "/assets/avocado.png",
    category: "Avocados"
  },
  {
    name: "Potatos - brown",
    price: 25,
    img: "/assets/potato.png",
    category: "Other"
  },
  {
    name: "Onions - red",
    price: 25,
    img: "/assets/onion-red.png",
    category: "Other"
  },
  {
    name: "Broccolis",
    price: 28,
    img: "/assets/broccoli.png",
    category: "Broccolis"
  },
  {
    name: "Celery",
    price: 32,
    img: "/assets/celery.png",
    category: "Celery"
  },
  {
    name: "Cucumbers",
    price: 40,
    img: "/assets/cucumbers.png",
    category: "Other"
  },
  {
    name: "Eggplants",
    price: 20,
    img: "/assets/eggplant.png",
    category: "Other"
  }
]


export default function BrowseProducts() {
  const [selected, setSelected] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };
  return (
    <section className="pb-10 pt-5" style={{ background: '#F6F6F6' }}>
      <div className="  max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Browse Products</h2>
        <div className="relative">
          <button onClick={scrollLeft} class="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow px-2 py-1 rounded-full">
            ◀
          </button>
          <div ref={scrollRef} class="flex gap-4 mb-6 overflow-x-auto whitespace-nowrap scrollbar-hide scroll-smooth px-8">

            {categories.map((cat, index) => (
              <button key={cat} onClick={() => { setSelected(index); setSelectedCategory(cat) }} className={`px-4 py-2 text-${selected == index ? '[#5E8001] fancy-underline' : '[#111]'} font-bold text-xl  transition`}>
                {cat}
              </button>
            ))}
          </div>

          <button onClick={scrollRight} class="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow px-2 py-1 rounded-full">
            ▶ 
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((p) => selectedCategory == "All" || p.category == selectedCategory ? (
            <div key={p.name} style={{}} className="bg-white rounded-xl shadow p-4 flex flex-col">
              <div className="image" style={{ height: '70%' }}>
                <img src={vegi} alt={p.name} className="mx-auto mb-2 py-4" style={{ width: '65%' }} />
              </div>

              <div className=''>
                <div className="font-semibold text-[#222] text-2xl flex-start">{p.name}</div>
                <div className="flex justify-between">
                  <p className="text-[#5E8001]  font-semibold">BDT. {p.price}/kg</p>
                  <button className=" flex items-center justify-center  rounded-full bg-white shadow transition">
                    <svg xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24" fill="none" stroke="#5E8001"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      className="w-6 h-6">

                      <circle cx="9" cy="20" r="1" />
                      <circle cx="17" cy="20" r="1" />
                      <path d="M5 6h16l-1.5 9H7L5 6z" />

                      <line x1="19" y1="3" x2="19" y2="9" />
                      <line x1="16" y1="6" x2="22" y2="6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ) : "")}
        </div>
        <div className="flex justify-center mt-6 text-xl text-gray-500">
          <span>
            Page 1 of 35
          </span>   {" "}
          <button className="text-['#5E8001']" onClick={() => { alert("API hitted for next Data") }}>
            {" >"}
          </button>
        </div>
      </div>
    </section>
  );
}

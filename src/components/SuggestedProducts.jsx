import '../assets/styles/suggestProducts.css'
const products = [
  { name: "Tomato", price: 30, img: require("../assets/images/tomato.png"), tag: "New" },
  { name: "Carrots", price: 22, img: require("../assets/images/carrot.png"), tag: "New" },
  { name: "Cucumbers", price: 40, img: require("../assets/images/cucumbers.png"), tag: "New" },
];

export default function SuggestedProducts() {
  return (
    <section className="bg-[#B4D173] py-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 ml-10">Suggested for you</h2>
        <div className="flex justify-center gap-6">
          {products.map((p) => (
            <div key={p.name} className="relative bg-white card rounded-2xl shadow p-3 w-60">
              <div className="absolute bg-[#5E8001] bg-800 top-0 left-0 flex justify-between items-center mb-2 px-5" style={{ borderBottomRightRadius: '16px', borderTopLeftRadius: '1rem' }}>
                <span className="text-white text-extrabold text-lg rounded">{p.tag}</span>
              </div>
              <div className="image" style={{height:'70%'}}>
              <img src={p.img} alt={p.name} className="mx-auto mb-2 py-4" style={{ width: '65%' }} />
              </div>
              <div className='flex-end'>
                <div className="font-bold text-3xl">{p.name}</div>
                <div className="flex gap-x-35 justify-around">
                  <p className="text-[#5E8001] text-xl font-bold">BDT. {p.price}/kg</p>
                  <button className=" flex items-center justify-center text-3xl rounded-full bg-white shadow transition">
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
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <button className="bg-[#5E8001] buttonBigRounded text-white px-6 py-2 w-70  rounded-2xl font-semibold shadow hover:bg-lime-800 transition">
            View All
          </button>
        </div>
      </div>
    </section>
  );
}

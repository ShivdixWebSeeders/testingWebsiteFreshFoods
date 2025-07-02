import deliveryMan from '../assets/delivery-man.png';

export default function DeliveryInfo() {
  return (
    <section className="py-10 bg-gray-50">
      <div class="max-w-5xl mx-auto px-4 py-10">
    <h2 class="text-2xl font-bold mb-6">Delivery Information</h2>

    <div class="flex flex-row lg:flex-row items-center gap-10">

      <div class="w-full lg:w-1/2 flex justify-center">
        <img src={deliveryMan} alt="Delivery Man" class="max-w-xs"/>
      </div>


      <div class="w-full lg:w-1/2 space-y-6">
        <div class="flex items-start space-x-2">
          <input type='checkbox' color='#B4D173' className="text-[#B4D173] mt-1" />
          <p class="text-lg font-medium">Home delivery available countrywide.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
   
          <div>
            <h3 class="text-lg font-semibold mb-2">Inside City Corporation</h3>
            <p class="flex items-center gap-2">
            ✅  Delivery within 6 hours
            </p>
            {/* Sorry sir as dont had time so i didnt make the svg  */}
            <p class="flex items-center gap-2">
            ✅ Delivery charge BDT. 50
            </p>
          </div>


          <div>
            <h3 class="text-lg font-semibold mb-2">Outside City Corporation</h3>
            <p class="flex items-center gap-2">
            ✅ Delivery within 24 hours
            </p>
            <p class="flex items-center gap-2">
            ✅  Delivery charge BDT. 70
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
    </section>
  );
}

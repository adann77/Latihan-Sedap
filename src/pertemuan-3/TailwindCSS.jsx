import Hasil from "./components/hasil"
import InputField from "./components/InputField"
import HitungGajiForm from "./HitungGajiForm"
import UserForm from "./UserForm"





export default function TailwindCSS() {
    return (
        <div>
            <h1 class="border m-4">Belajar Tailwind CSS 4</h1>
            <button className="bg-blue-500 text-white px-4 py-2 mx-4 rounded shadow-lg">
                Click Me
            </button>   
            
            <ShadowEffects/>
            <UserForm/>
            <InputField/>
            <HitungGajiForm/>
         
            
           
      </div>
    )
  
}

function ShadowEffects(){
    return (
        <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold">Hover me!</h3>
            <p className="text-gray-600 mt-2">Lihat efek bayangan saat hover.</p>
        </div>
    )
}
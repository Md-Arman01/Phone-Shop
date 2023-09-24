import { useLoaderData, useParams } from "react-router-dom";
import swal from 'sweetalert';

const PhonesDetails = () => {
  const { id } = useParams();
  const phones = useLoaderData();
  const phone = phones.find((phone) => phone.id === id);
  const { brand_name, image, phone_name } = phone || {};


  const handleFavorite = () =>{

  
    const allPhones = []
    
    const getFavorite = JSON.parse(localStorage.getItem('phone'))

    if(!getFavorite){
      allPhones.push(phone)
      localStorage.setItem('phone', JSON.stringify(allPhones))
      swal("Good Job", "Added To Favorite Phone", "success")
    }else{
      const isExits = getFavorite.find(phone => phone.id == id)
      if(isExits){
        swal("Oops!", "Allready", "error");
      }else{
        allPhones.push(...getFavorite, phone)
        localStorage.setItem('phone', JSON.stringify(allPhones))
        swal("Good Job", "Added To Favorite Phone", "success")
      }
      
    }




  }
  




  return (
    <div>
      <div className="flex flex-col items-center h-screen  my-14">
        <h1 className="text-3xl font-bold mb-20">Phone Details</h1>
        <div className="relative flex items-center py-10 w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <img
              src={image}
              alt="image"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-6">
            <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-cyan-500 antialiased">
              {brand_name}
            </h6>
            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {phone_name}
            </h4>

            
              <button
              onClick={handleFavorite}
                className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-cyan-500 transition-all hover:bg-cyan-500/10 active:bg-cyan-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button">
                Add to Favorites
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                </svg>
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhonesDetails;

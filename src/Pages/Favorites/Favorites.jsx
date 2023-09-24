import { useEffect, useState } from "react";
import FavoriteCards from "./FavoriteCards";


const Favorites = () => {
  const [phones , setPhones] = useState([]);
  const [noFoundData, setNoFoundData] = useState(false);
  const [isShow , setIsShow] = useState(false);
  const [total , setTotal] =  useState(0);
  
  useEffect(()=>{
    const getFavorite = JSON.parse(localStorage.getItem('phone'))
    if(getFavorite){
      setPhones(getFavorite)
      const totalPrice = getFavorite.reduce((prvPrice , curntPrice)=> prvPrice + curntPrice.price,0)
      const fixTotalPrice = totalPrice.toFixed(2)
      setTotal(fixTotalPrice)
    }else{
      setNoFoundData('No items found')
    }
  },[])
  
  const handleDelete = () => {
    localStorage.clear()
    setPhones([])
    setNoFoundData('No items found')
  }
  
  
  
  return (
    <div>
      {
        phones.length > 0 && <div className="flex justify-center items-center">
        <button
        onClick={handleDelete}
        className="block  bg-gradient-to-tr from-cyan-400 to-cyan-600  shadow-md shadow-cyan-500/20  hover:shadow-lg hover:shadow-cyan-500/40 text-white transition-all hover:bg-cyan-500/10 active:bg-cyan-500/30 text-base select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans  font-bold uppercase text-blue-gray-900 hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Delete All
      </button>
        </div>
      }
      {
        phones.length > 0 && <h1 className="text-center text-2xl font-semibold my-4">Total Price : <span className="font-bold">{total}</span></h1>
      }


      {
      noFoundData? <p className="flex justify-center items-center h-screen text-4xl font-bold">{noFoundData}</p> :
      <div className="grid grid-cols-2 gap-5 my-10">
        {
          isShow? phones?.map((phone, index) => <FavoriteCards key={index} phone={phone}></FavoriteCards>) 
          :
          phones?.slice(0, 4).map((phone, index) => <FavoriteCards key={index} phone={phone}></FavoriteCards>)
        }
      </div>
      }
      {
        phones.length > 4 &&   <div className="flex justify-center items-center">
        <button
        onClick={() => setIsShow(!isShow)}
        className="block  bg-gradient-to-tr from-cyan-400 to-cyan-600  shadow-md shadow-cyan-500/20  hover:shadow-lg hover:shadow-cyan-500/40 text-white transition-all hover:bg-cyan-500/10 active:bg-cyan-500/30 text-base select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans  font-bold uppercase text-blue-gray-900 hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        {isShow? 'See Less' : 'See All'}
      </button>
        </div>
      }
    </div>
  );
};

export default Favorites;

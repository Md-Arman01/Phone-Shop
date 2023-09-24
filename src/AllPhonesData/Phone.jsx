import PropTypes from "prop-types"
import Rating from "react-rating";
import { NavLink } from "react-router-dom";

const Phone = ({phone}) => {
    const {id, brand_name, image, phone_name, price, rating} = phone || {}
    return (
        <div>
            <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
    <img
      src={image}
      className="h-full w-full object-cover"
    />
  </div>
  <div className="p-6">
    <h1><Rating 
     emptySymbol={<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"/></svg>}
     fullSymbol={<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>}
    
  initialRating={rating}
  readonly
/></h1>
    <h1 className="block font-sans text-xl font-medium leading-relaxed text-blue-gray-900 antialiased">{brand_name}</h1>
    <div className="mb-2 flex items-center justify-between">
      <p className="block font-sans text-xl font-medium leading-relaxed text-blue-gray-900 antialiased">
        {phone_name}
      </p>
      <p className="block font-sans text-xl font-medium leading-relaxed text-blue-gray-900 antialiased">
        {price}
      </p>
    </div>
    
  </div>
  <div className="p-6 pt-0">
    
    <NavLink to={`/phones/${id}`} state={phone_name}>
    <button
      className="block w-full bg-gradient-to-tr from-cyan-400 to-cyan-600  shadow-md shadow-cyan-500/20  hover:shadow-lg hover:shadow-cyan-500/40 text-white transition-all hover:bg-cyan-500/10 active:bg-cyan-500/30 text-base select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans  font-bold uppercase text-blue-gray-900 hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
    >
      See Details
    </button>
    </NavLink>
  </div>
</div>
        </div>
    );
};
Phone.propTypes ={
    phone: PropTypes.object.isRequired
}
export default Phone;
const FavoriteCards = ({ phone }) => {
  const { brand_name, image, phone_name } = phone || {};

  return (
    <div>
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
          </div>
        </div>
    </div>
  );
};

export default FavoriteCards;

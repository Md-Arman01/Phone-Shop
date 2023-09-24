import { useLoaderData } from "react-router-dom";
import Phones from "../../AllPhonesData/Phones";

const Home = () => {

    const allData =  useLoaderData()
    

  return (
    <div className="my-10">
      <h1 className="text-3xl font-bold text-center">Our Phones Collections</h1>
      <Phones allData={allData}></Phones>
    </div>
  );
};

export default Home;

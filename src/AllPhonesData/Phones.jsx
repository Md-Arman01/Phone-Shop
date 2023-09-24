import PropTypes from "prop-types"
import Phone from "./Phone";

const Phones = ({allData}) => {
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
            {
                allData?.map((phone , index) => <Phone key={index} phone={phone}></Phone>)
            }
        </div>
    );
};

Phones.propTypes ={
    allData: PropTypes.array.isRequired
}
export default Phones;
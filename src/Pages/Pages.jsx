import { NavLink } from "react-router-dom";


const Pages = () => {
    return (
        <div className="flex gap-5">
            <NavLink to="/" className={({ isActive}) => isActive ? "text-cyan-400 text-xl font-semibold underline mt-1 " : " text-xl font-semibold"}>Home</NavLink>
            <NavLink to="/favorites" className={({ isActive}) => isActive ? "text-cyan-400 text-xl font-semibold underline mt-1 " : " text-xl font-semibold"}>Favorites</NavLink>
            <NavLink to="/login" className={({ isActive}) => isActive ? "text-cyan-400 text-xl font-semibold underline mt-1 " : " text-xl font-semibold"}>Login</NavLink>
        </div>
    );
};

export default Pages;
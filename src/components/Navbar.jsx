import {NavLink} from "react-router-dom"
import Home from "./Home";
const links = [
  {
    title: "Home",
    to: "/",
    id: "header-link-home",
  },
  {
    title: "About",
    to: "/about",
    id: "header-link-about",
  },
  {
    title: "Movies",
    to: "/movies",
    id: "header-link-movies",
  },
];
export const Navbar = () => {
return(
  <>
  {links.map(({title,to},index)=>{
    return <NavLink key={index} to={to} style={{fontWeight:"bold",color:"black", padding:"10px", textDecoration:"none"}}>{title}</NavLink>
  })}
  </>
)
}

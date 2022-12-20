// import { useRef } from "react";
import "../components/Nav.css";

function Nav() {
    // const navRef = useRef();
    // const showNav = () => {
    //     navRef.current.classlist.toggle("responsive_nav");
    // }
    return(
        <header>
            <h3>My Restaurant</h3>
            <nav>
                <a href="/#">Home</a>
                <a href="/#">Menu</a>
                <a href="/#">About</a>
                <a href="/#">Contact</a>
            </nav>
        </header>
    )
} 
export default Nav;
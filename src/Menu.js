import { Link } from "react-router-dom";
function Menu() {
    return (
        <>
            <div id="header-wrapper">
                <div id="header" class="container">
                    <div id="logo">
                        <h1><a href="#">Nature</a></h1>
                    </div>
                </div>
            </div>
            <div id="menu">
                <ul>
                    <li class="current_page_item"><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                    <li><Link to={'/contact'}>Contact Us</Link></li>
                </ul>
            </div>
        </>
    )
}
export default Menu;
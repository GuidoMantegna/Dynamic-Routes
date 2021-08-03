import './styles/Navbar.scss'
import UserNav from './UserNav';
import MainNav from './MainNav';
import NavbarEx from './NavbarEx';

const Navbar = () => {
    return (
      // <nav className="navbar-main-container navbar navbar-expand-lg navbar-light mlibre-color">
      //   <div className="container-lg px-2">
      //       <UserNav/>
      //       <i className="bi bi-list text-dark btn-burguer"></i>
      //       <MainNav/>
      //   </div>
      // </nav>
      <NavbarEx/>
    );
};

export default Navbar;
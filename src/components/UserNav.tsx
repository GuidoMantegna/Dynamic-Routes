
const UserNav = () => {
    return (
        <nav className="nav col-10 col-md-7 col-lg-4 order-lg-last justify-content-around align-items-center" id="navbar">
            <i className="bi bi-person-circle nav-link text-secondary p-0"><span className="ms-1 fst-normal">USER</span></i>
            <a className="nav-link px-0 text-secondary" href="#">Compras</a>
            <a className="nav-link px-0 text-secondary" href="#">Favoritos</a>
            <a className="nav-link px-0 text-secondary" href="#"><i className="bi bi-bell"></i></a>
            <a className="nav-link px-0 text-secondary" href="#"><i className="bi bi-cart2"></i></a>
        </nav>
    );
};

export default UserNav;
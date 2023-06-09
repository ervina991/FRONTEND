const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    {props.tittle_nav}
                </a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                {props.nav_home}
                            </a>
                        </li>
                    </ul>
                    <ul className="navbar-nav me-auot mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                {props.nav_reservasi}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );

}

export default Navbar;
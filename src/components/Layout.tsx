import React from 'react';
import Header from './Header';
import Navbar from './Navbar';

const Layout: React.FC = ({children}) => {
    return (
        <div className="Layout_main-container h-100 bg-light">
            <Header />
            <Navbar />
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb m-3">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Categorias</li>
                </ol>
            </nav>
            <div className="">
                {children}
            </div>
        </div>
    );
};

export default Layout;
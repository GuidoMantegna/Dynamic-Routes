import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import './styles/Layout.scss'

const Layout: React.FC = ({children}) => {
    return (
        <div className="Layout_main-container min-vh-100">
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
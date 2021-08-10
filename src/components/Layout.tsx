import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IdProvider } from '../contexts/Contexts';
import Header from './Header';
import Navbar from './Navbar';
import './styles/Layout.scss'

const Layout: React.FC = ({children}) => {
    const { id } = useParams<{id: string}>();

    const [ids, setIds] = useState('')

    useEffect(() => {
        setIds(id)
    })

    // const handleId = (id) => {
    //     setIds(id)
    // }

    const providerValue = {
        id: ''
        // handleId: handleId
    }

    return (
        <div className="Layout_main-container min-vh-100">
            <IdProvider value={providerValue}>
                {/* <Header /> */}
                {/* <Navbar /> */}
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb m-3">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Categorias</li>
                    </ol>
                </nav>
                <div className="">
                    {children}
                </div>
            </IdProvider>
        </div>
    );
};

export default Layout;
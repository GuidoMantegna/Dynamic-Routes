import Loader from '../assets/imgs/loader.gif';
import './styles/PageLoading.scss';

const PageLoading = () => {
    return (
        <div className='page-loading'>
            <img src={Loader} alt="loader"/>
        </div>
    );
};

export default PageLoading;
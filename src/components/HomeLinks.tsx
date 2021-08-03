import { Link } from 'react-router-dom';

type HomeLinksProps = {
    name: string;
    imgSrc: string;
    linkTo: string; 
}

const HomeLinks:React.FC<HomeLinksProps> = ({name, imgSrc, linkTo}) => {
    return (
        <Link to={linkTo} className="country-link btn btn-link mb-2">
            <img src={imgSrc} alt="" className="flag me-2"/>
            {name}
        </Link>
    );
};

export default HomeLinks;
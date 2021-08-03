import './styles/Landing.scss';
import HomeLinks from '../components/HomeLinks';
// Flags imports
import Flags from '../assets/imgs';
const {arg, bol, bra, chi, col, ecu, par, per, uru, ven} = Flags;

const Landing = () => {

    const countrys = [
        {name: 'Argentina', flag: arg, id: 'MLA'},
        {name: 'Bolivia', flag: bol, id: 'MBO'},
        {name: 'Brasil', flag: bra, id: 'MLB'},
        {name: 'Chile', flag: chi, id: 'MLC'},
        {name: 'Colombia', flag: col, id: 'MCO'},
        {name: 'Ecuador', flag: ecu, id: 'MEC'},
        {name: 'Paraguay', flag: par, id: 'MPY'},
        {name: 'Perú', flag: per, id: 'MPE'},
        {name: 'Uruguay', flag: uru, id: 'MLU'},
        {name: 'Venezuela', flag: ven, id: 'MLV'},
    ];

    return (
        <div className='landing container-fluid m-0 row align-items-center'>
            <div className="col-7">
                <img 
                    src="https://static.mlstatic.com/org-img/homesnw/img/ml-logo@2x.png?v=4.0" 
                    alt="main-logo"
                    className="img-fluid"/>
            </div>
            <ul className="col-5">
                {countrys.map(country => {
                    return (
                        <li key={country.id}>
                            <HomeLinks name={country.name} linkTo={country.id} imgSrc={country.flag}/>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Landing;
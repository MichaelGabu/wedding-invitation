import './location.sass';
import Button from '../Button';
import chapel from '../../assets/images/chapel-draw.webp';

const Location = () => {
    return (
        <section className="section location">
            <figure className="location__bg">
                <img className="location__bg-image" src={chapel} alt="Capilla" />
            </figure>
            <div className="section__container location__container">
                <div className="location__content">
                    <h3 className="location__title">Ceremonia y Recepción</h3>
                    <h4 className="location__subtitle">HACIENDA SAN SEBASTIAN</h4>
                    <p className="location__address">Vía Subachoque - El Rosal</p>
                </div>
                <div className="loaction__actions">
                    <Button label="Ver ubicación" onClick={() => {}} />
                </div>
            </div>
        </section>
    );
};

export default Location;
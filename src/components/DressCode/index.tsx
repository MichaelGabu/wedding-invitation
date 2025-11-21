import { IconDress, IconTie } from '../Icons';
import './dresscode.sass';
import stain from '../../assets/images/stain-dress-code.webp';

const DressCode = () => {
    return (
        <section className="section dresscode">
            <div className="section__container dresscode__container">
                <h3 className="dresscode__title">Dress code</h3>
                <div className="dresscode__row">
                    <div className="dresscode__item">
                        <div className="dresscode__icon">
                            <img src={stain} alt="Stain" className="dresscode__icon-stain" />
                            <IconDress />
                        </div>
                        <h4 className="dresscode__subtitle">Ellas divinas</h4>
                        <p className="dresscode__text">
                            Vestido formal
                            <br />
                            (Se reserva color blanco y rojo)
                        </p>
                    </div>
                    <hr className="dresscode__separator" />
                    <div className="dresscode__item">
                        <div className="dresscode__icon">
                            <img src={stain} alt="Stain" className="dresscode__icon-stain" />
                            <IconTie />
                        </div>
                        <h4 className="dresscode__subtitle">Ellos guapos</h4>
                        <p className="dresscode__text">
                            Traje Formal
                            <br />
                            (Se reserva color azul y chaleco)
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DressCode;
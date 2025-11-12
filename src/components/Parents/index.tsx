import { OrnamentFlower } from '../Ornaments';
import './parents.sass';

const Parents = () => {
    return (
        <section className="section parents">
            <div className="section__container parents__container">
                <h3 className="parents__title">Con la bendición de nuestros padres</h3>
                <ul className="parents__list">
                    <li className="parents__item">
                        <h4 className="parents__item-title">Madre de la novia</h4>
                        <p className="parents__item-name">Myriam Segovia</p>
                    </li>
                    <OrnamentFlower />
                    <li className="parents__item">
                        <h4 className="parents__item-title">Padres del novio</h4>
                        <p className="parents__item-name">
                            Rubiela Buitrago <br />
                        & <br />
                            Juan Gaona
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Parents;
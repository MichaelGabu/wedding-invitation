import './footer.sass';
import { IconEnvelope } from '../Icons';
import Texture from '../../assets/images/stain-dress-code.webp';

const Footer = () => {
    return (
        <footer className="section footer">
            <div className="section__container footer__container">
                <div className="footer__rainenvelopes">
                    <img src={ Texture } alt="Texture" loading="lazy" className="footer__rainenvelopes-texture" />

                    <div className="footer__rainenvelopes-icon">
                        <IconEnvelope className="footer__rainenvelopes-icon-icon" />
                    </div>
                    
                    <span className="footer__rainenvelopes-text">Luvia de sobres</span>
                </div>

                <div className="footer__prayer">
                    <p>“Las mejores cosas de la vida merecen ser compartidas.</p>
                    <p>Gracias por celebrar con nosotros”.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
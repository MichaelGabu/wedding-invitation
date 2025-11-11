import './photo.sass';
import photoFlowers from '../../assets/images/photo-flowers.webp';

interface PhotoProps {
    src: string;
    alt: string;
}

const Photo = ({ src, alt }: PhotoProps) => {
    return (
        <section className="section photo">
            <div className="section__container photo__container">
                <img src={src} alt={alt} loading="lazy" className="photo__image" />
                <img src={photoFlowers} alt="Flowers" loading="lazy" className="photo__flowers" />
            </div>
        </section>
    );
};

export default Photo;
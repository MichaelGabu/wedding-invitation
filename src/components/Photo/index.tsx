import './photo.sass';

interface PhotoProps {
    src: string;
    alt: string;
}

const Photo = ({ src, alt }: PhotoProps) => {
    return (
        <section className="section photo">
            <div className="section__container">
                <img src={src} alt={alt} />
            </div>
        </section>
    );
};

export default Photo;
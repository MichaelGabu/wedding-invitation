import './confirmation.sass';
import Button from '../Button';

const Confirmation = () => {
    return (
        <section className="section confirmation">
            <div className="section__container confirmation__container">
                <div className="confirmation__content">
                    <h2 className="confirmation__title">Confirma</h2>
                    <h4 className="confirmation__subtitle">Tu asistencia</h4>
                </div>
                
                <Button label="Dando clic aquí" icon="tabler:calendar-heart" onClick={() => {}} />
            </div>
        </section>
    );
};

export default Confirmation;
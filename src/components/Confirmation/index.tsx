import './confirmation.sass';
import Button from '../Button';

const Confirmation = () => {
    const confirm = () => {
        const number = '573143744972';
        const text = 'Hola, quiero confirmar mi asistencia a la boda 💒💍';
        const url = `https://api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(text)}`;
        
        window.open(url, '_blank');
    }

    return (
        <section className="section confirmation">
            <div className="section__container confirmation__container">
                <div className="confirmation__content">
                    <h2 className="confirmation__title">Confirma</h2>
                    <h4 className="confirmation__subtitle">Tu asistencia</h4>
                </div>
                
                <Button label="Dando clic aquí" icon="tabler:calendar-heart" onClick={() => confirm()} />
            </div>
        </section>
    );
};

export default Confirmation;
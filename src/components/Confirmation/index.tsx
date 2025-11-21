import './confirmation.sass';
import Button from '../Button';

interface ConfirmationProps {
    phone?: number | string;
}

const phones = [
    { value: 1, wp: 573016658720 },
    { value: 2, wp: 573143744972 },
]

const Confirmation: React.FC<ConfirmationProps> = ({ phone }) => {
    const number = phones.find((wp) => Number(phone) === wp.value)?.wp;
    const text = 'Hola, quiero confirmar mi asistencia a la boda 💒💍';
    const url = `https://api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(text)}`;
    
    const confirm = () => {
        window.open(url, '_self');
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
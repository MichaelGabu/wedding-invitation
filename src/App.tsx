import { useState, useEffect } from 'react';
import Head from './components/Head';
import Date from './components/Date';
import Prayer from './components/Prayer';
import Timer from './components/Timer';
import Location from './components/Location';
import DressCode from './components/DressCode';
import Photo from './components/Photo';
import Itinerary from './components/Itinerary';
import Parents from './components/Parents';
import Confirmation from './components/Confirmation';
import Footer from './components/Footer';

interface Guest {
    nombre: string;
    asientos: number;
    codigo: string;
}

const data = {
    title: 'Natalia + Michael',
    subtitle: 'Nuestra Boda',
    date: '2026-03-01 15:00',
    place: 'Finca La Campana, Sevilla',
    prayer: '<p>"El amor es paciente, es bondadoso. El amor no es envidioso ni jactancioso ni orgulloso. No se comporta con rudeza, no es egoísta, no se enoja fácilmente, no guarda rencor".</p><blockquote>-1 Corintios 13:4-5</blockquote>'
}

function App() {
    const [guestName, setGuestName] = useState('');
    const [guestSeats, setGuestSeats] = useState(0);
    const [isValidGuest, setIsValidGuest] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const guestCode = urlParams.get('guest');

        if (guestCode) {
            fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTQEpBrp4VMuMy9e9tf_NzbOQ_awlIpQJat5uZcrvozifEzKkynMUQW24htv7aL8pjjZ3cVAyRYeWkc/pub?gid=0&single=true&output=csv')
                .then(response => response.text())
                .then(csvText => {
                    const lines = csvText.split('\n');
                    const headers = lines[0].split(',').map(h => h.trim());
                    const guests: Guest[] = [];
                    for (let i = 1; i < lines.length; i++) {
                        const values = lines[i].split(',').map(v => v.trim());
                        const guest: any = {};
                        for (let j = 0; j < headers.length; j++) {
                            guest[headers[j]] = values[j];
                        }
                        guests.push({
                            ...guest,
                            asientos: parseInt(guest.asientos, 10)
                        } as Guest);
                    }

                    const guest = guests.find(g => g.codigo === guestCode);

                    if (guest) {
                        setGuestName(guest.nombre);
                        setGuestSeats(guest.asientos);
                        setIsValidGuest(true);
                    }
                    setIsLoading(false);
                });
        } else {
            setIsLoading(false);
        }
    }, []);

    if (isLoading) {
        return <div className="invitation"><p>Cargando...</p></div>;
    }

    if (!isValidGuest) {
        return (
            <div className="invitation">
                <h2>Invitación no encontrada</h2>
                <p>Por favor, verifica que el enlace que has utilizado es correcto.</p>
            </div>
        );
    }

    return (
        <div className="invitation">
            <section className="section">
                <div className="section__container">
                    <p className="guest-greeting">Hola, {guestName}!</p>
                    <p>Dispones de {guestSeats} asientos.</p>
                </div>
            </section>
            <Head 
                title="Natalia + Michael" 
                subtitle="Nuestra Boda" 
            />
            <main>
                <Date date={data.date} /> 
                <Prayer prayer={data.prayer} />
                <Timer date={data.date} />
                <Location />
                <DressCode />
                <Photo src="https://picsum.photos/id/235/200/300" alt="Argolla" />
                <Itinerary />
                <Parents />
                <Photo src="https://picsum.photos/id/235/200/300" alt="Argolla" />
                <Confirmation />
            </main>
            <Footer />
        </div>
    );
}

export default App;

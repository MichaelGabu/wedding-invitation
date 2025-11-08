import './dresscode.sass';

const DressCode = () => {
    return (
        <section className="section dresscode">
            <div className="section__container dresscode__container">
                <h3 className="dresscode__title">Dress code</h3>
                <div className="dresscode__row">
                    <div className="dresscode__item">
                        <h4 className="dresscode__subtitle">Ellas divinas</h4>
                        <p className="dresscode__text">Vestido formal</p>
                    </div>
                    <div className="dresscode__item">
                        <h4 className="dresscode__subtitle">Ellos guapos</h4>
                        <p className="dresscode__text">
                            Vestido Formal
                            <br />
                            (Se reserva color azul oscuro y chaleco)
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DressCode;
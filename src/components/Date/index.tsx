import './date.sass';

interface DateProps {
    date: string;
}

const Date: React.FC<DateProps> = ({ date }) => {
    return (
        <section className="section date">
            <div className="section__container">
                <p>{date}</p>
            </div>
        </section>
    );
};

export default Date;
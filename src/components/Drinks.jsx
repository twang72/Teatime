import DRINKS_DATA from '../drinks-data.json'
const Drinks = () => {
    return (
        <div>
            {DRINKS_DATA.map(({ id, name}) => (
                <div key={id}>
                    <h1>{name}</h1>
                </div>
            ))}
        </div>
    );

};

export default Drinks;
function MyComponents({label, image, calories, ingredients, cuisine, health}) {
    
    return (
        <div>

            <div className="container">
                <h2>{label}</h2>
            </div>

            <div className="container">
                <img src={image} alt="recipe" />
            </div>

            <div className="container">
                <p>{cuisine}</p>
            </div>

            <ul className="container list">
                
                {ingredients.map((ingredient, index) => (
                    <li key={index}>
                        {ingredient}
                    </li>
                ))}
            </ul>

            <div className="container">
                <p>{calories.toFixed()} calories</p>
            </div>

            <div className="container">
                <p>{health[2]}</p>
            </div>
        </div>
    )}

    export default MyComponents;
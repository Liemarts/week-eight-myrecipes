import iconTwo from './icons8-done-40.png';

function MyRecipesComponents ({label, image, mealType, calories, dietLabels, ingredients}) {
    return (
        <div>
            <div className="container">
                <h2>{label}</h2>
            </div>

            <div className="container">
                <img src={image} alt="recipe"/>
            </div>

            <div className="container">
                <h3>{mealType}</h3>
            </div>

            <div className="container">
                <h3>{dietLabels}</h3>
            </div>

            <ul className="container list">
                {ingredients.map ((ingredient, index) => (
                    <li key={index}>
                        <img src={iconTwo} alt="icon done" className='icon'/>
                        {ingredient}</li>
                ))}
            </ul>

            <div className="container">
                <p>{calories.toFixed()} calories</p>
            </div>
        </div>
    )
}

export default MyRecipesComponents;

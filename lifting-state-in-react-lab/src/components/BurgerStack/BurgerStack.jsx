// src/components/BurgerStack/BurgerStack.jsx
import Ingredient from "../Ingredient.jsx";

const BurgerStack = (props) => {
    if (props.ingredients.length === 0) {
        return <p>No Ingredients</p>
    }
        return (
            <ul>
                {props.ingredients.map((ingredient, index) => (
                    <Ingredient
                        key={index}
                        ingredient={ingredient}
                        action="remove"
                        onAction={() => props.onRemove(index)}
                    />
                ))}
            </ul>
        )
    };


export default BurgerStack;

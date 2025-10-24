// src/components/IngredientList/IngredientList.jsx
import Ingredient from "../Ingredient.jsx";

const IngredientList = (props) => {
    return (
        <ul>
            {props.ingredients.map((ingredient, index) => (
                <Ingredient
                    key={index}
                    ingredient={ingredient}
                    action="add"
                    onAction={props.onAdd}
                />
            ))}
        </ul>
    );
};

export default IngredientList;

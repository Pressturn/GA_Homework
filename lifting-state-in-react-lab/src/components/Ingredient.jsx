const Ingredient = ({ ingredient, action, onAction }) => {
    return (
        <li style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}                  
            {action === 'add' ? (
                <button onClick={() => onAction(ingredient)}>+</button>
            ) : (
                <button onClick={onAction}>X</button>
            )}
        </li>
    )
}

export default Ingredient;
const TodoListItem = ({text, important = false}) => {
    const style = {
        color: important ? 'tomato' : 'black'
    }

    return (
        <span style={style}>{text}</span>
    )
};

export default TodoListItem;
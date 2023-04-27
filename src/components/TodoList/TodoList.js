import ListGroup from 'react-bootstrap/ListGroup';
import TodoItem from '../TodoItem/TodoItem';

export default function TodoList({
    todos, 
}) {
    return (
        <div style={{ width: '20%', margin: '10px auto' }}>
            <ListGroup >
                {todos.map(x => <TodoItem key={x._id} {...x} />)}
            </ListGroup>
        </div>
    );
}

//1'45''
import ListGroup from 'react-bootstrap/ListGroup';

export default function TodoItem({
    text, 
    isCompleted,
}) {
    return (
        <div>
            <ListGroup.Item>
                {text}
            </ListGroup.Item>
        </div>
    );
}
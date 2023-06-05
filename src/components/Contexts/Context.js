// in app:
//set witch part off a tree have a context:
// import {TodoContext} from '../Context/Context';

const contextValue = {
    onTodoDeleteClick,
    onTodoAdd,
}

return (
    <TodoContext.Provider value={contextValue}>

    </TodoContext.Provider>
)

// in a TodoItem:
// import { useContext } from "react";
// import {TodoContext} from '../Context/Context';
const { onTodoDeleteClick } = useContext(TodoContext);
const name = useContext(TodoContext);
return (
    <>
        <>{name}</>
        <>{name}</>
    </>
)

// in context:
import { createContext, useContext } from "react";

export const TodoContext = createContext();
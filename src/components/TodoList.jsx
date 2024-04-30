import { useContext } from 'react';
import Todo from './Todo';
import { TodoContext } from '../context/TodoContext';
const TodoList = () => {
    const [ todos ] = useContext( TodoContext );
    return(
        1 <= todos.length ? todos.map( ( item ) => {
            return(
                <Todo key={ item.id } id={ item.id } title={ item.title } completed={ item.completed } />
            );
        } ) : ( <h4> You can add your tasks now !  </h4> )
    );
}

export default TodoList;
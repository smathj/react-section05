import TodoItem from "./TodoItem.jsx";
import {useState} from "react";

const List = ({todos}) => {

    const [search, setSearch] = useState("")

    const onChangeSearch = (e) => {
        setSearch(e.target.value)
    }


    const getFilteredData = () => {
        if (search === "") {
            return todos;
        }
        return todos.filter((todo) => todo.content.toLowerCase().includes(search.toLowerCase()))
    }

    const filteredTodos = getFilteredData();    // 호출!!!

    return (
        <div className={"List"}>
            <h4>Todo List 🪴</h4>
            <input value={search} onChange={onChangeSearch} placeholder={"검색어를 입력해주세요"}/>
            <div className={"todos_wrapper"}>
                {filteredTodos.map((todo) => {
                    return <TodoItem key={todo.id} {...todo}/>
                })}
            </div>
        </div>
    )
}

export default List;
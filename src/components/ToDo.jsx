import { useDispatch, useSelector } from "react-redux";
import ToDoSlice from "../redux/ToDoSlice";

const ToDo = ()=>{

    const actions=ToDoSlice.actions;
    const dispatch=useDispatch();
    const {value,todoList}=useSelector(store=>store.todoSlice);
    const handleChange = (e)=>{
        const val=e.target.value;  
        dispatch(actions.setValue(val));
    }
    const onTodoAdd=()=>{
        dispatch(actions.addTask(value));
        dispatch(actions.setValue(""));
    }
    return (
        <>
            <div style={{display:"flex"}}>
                <div className="inputBox">
                    <input onInput={(e)=>handleChange(e)} value={value}/>
                    <button onClick={()=>onTodoAdd()}>Add ToDo</button>
                </div>
                <div className="list">
                    <ul>
                        {/* {render list} */}
                        {todoList.map((todo,index)=>{
                            return(<li key={index}>{todo}</li>)
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ToDo;
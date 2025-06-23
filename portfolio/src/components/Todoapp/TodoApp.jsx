import { useState } from "react";

const TodoApp = () => {
  // usestate for Handling the Todos
  let [todo, setTodo] = useState([]); //usestate To hold the array of todo
  let [input, setInput] = useState(""); //useState for Holding the Input text from user
  let [editId, setEditId] = useState(null); // useState for Holding the Edit IDs
  let [editText, setEditText] = useState(''); // usestate for updating the Text entered by user

  // function to create the Todo
  const createTodo = () => {
    if (input.trim()) {
      setTodo([...todo, { id: Date.now(), text: input, done: false }]);
      setInput("");
    }
  };

  // function to ReMove the Todo
  const removeTodo = (id) => {
    console.log("removeId",id)
    setTodo(todo.filter(ele=>ele.id!==id))
  };
  // function to Toggle the Todo
  const toggleTodo = (id) => {
      console.log("toggelId",id)
      setTodo(todo.map((ele=>ele.id==id?{...ele,done:!ele.done}:ele)))
  };
  // function to edit the Todo
  const editTodo = (id,text) => {
    console.log("editId",id)
    console.log("edittext",text)
    setEditId(id)
    setEditText(text)
  };
  // function to Save Todo the Todo
  const saveTodo = (id) => {
      setTodo(todo.map((ele=>ele.id==id?{...ele,text:editText}:ele)))
       setEditId(null)
  };

  return (
    <div className="container my-2">
      <div className="todo p-5 bg-info shadow">
        {/* user_Input start */}
        <div className="d-flex">
          <input
            type="text"
            className="form-control shadow-lg border border-success"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="btn btn-outline-success shadow ms-2"
            onClick={() => createTodo()}
          >
            Addtodo
          </button>
        </div>
        {/* user_Input end  */}
        {/* todos start */}
        <div className="todo-list">
          {todo.map((ele) => (
            // EDITING THE TEXT
            <li className="list-group-item border border-danger shadow-lg bg-white fw-bold rounded-3 p-2 my-2 d-flex justify-content-between">
              <div>
                              {editId === ele.id ? (
                <>
                  <input
                    type="text"
                    className="form-control shadow-lg border border-success"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                </>
              ) : (
                <>
                  <span className={`${ele.done?"text-decoration-line-through text-secondary":"text-dark"}`}>{ele.text}</span>
                </>
              )}
              </div>
              {/* edit functionality buttons */}
               <div>
                              {
                editId==ele.id?(<>
                <button className="btn btn-success mx-2" onClick={()=>saveTodo(ele.id)}>save</button>
                </>):(<>
                <button className="btn btn-warning mx-2" onClick={()=>editTodo(ele.id,ele.text)}>edit</button>
                <button className="btn btn-info mx-2" onClick={()=>toggleTodo(ele.id)}>{ele.done?"undo":"done"}</button>
                </>)
              }
              {/* remove button */}
              <button className="btn btn-danger mx-2" onClick={()=>removeTodo(ele.id)}>delete</button>
               </div>
            </li>
          ))}
        </div>
        {/* todos end */}
      </div>
    </div>
  );
};

export default TodoApp;

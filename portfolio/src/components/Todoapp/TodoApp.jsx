import { useState } from "react";

const TodoApp = () => {
  // usestate for Handling the Todos
  let [todo, setTodo] = useState([]); //usestate To hold the array of todo
  let [input, setInput] = useState(""); //useState for Holding the Input text from user
  let [editId, setEditId] = useState(); // useState for Holding the Edit IDs
  let [editText, setEditText] = useState(); // usestate for updating the Text entered by user

  // function to create the Todo
  const createTodo = () => {
    if (input.trim()) {
      setTodo([...todo, { id: Date.now(), text: input, done: false }]);
      setInput("");
    }
  };

  // function to ReMove the Todo
  const removeTodo = () => {};
  // function to Toggle the Todo
  const toggleTodo = () => {};
  // function to edit the Todo
  const editTodo = () => {};
  // function to Save Todo the Todo
  const saveTodo = () => {};

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
            <li>
              {editId === ele.id ? (
                <>
                  <input
                    type="text"
                    className="form-control shadow-lg border border-success"
                    value={input}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                </>
              ) : (
                <>
                  <span>{ele.text}</span>
                </>
              )}
              {
                editId==ele.id?(<>
                <button>save</button>
                </>):(<>
                <button>edit</button>
                <button>done</button>
                </>)
              }
              <button>delete</button>
            </li>
          ))}
        </div>
        {/* todos end */}
      </div>
    </div>
  );
};

export default TodoApp;

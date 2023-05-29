import { useState } from 'react';

function App() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);

  const onChange = (e) => {
    setToDo(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === '') {
      return;
    }

    // 현재 toDo를 받아와서 새로운 toDo 의 array를 리턴
    setToDos((currentArr) => [toDo, ...currentArr]);
    setToDo('');
  };

  console.log(toDos);

  return (
    <div>
      <form>
        <h1>My ToDo ({toDos.length})</h1>
        <input
          value={toDo}
          onChange={onChange}
          type='text'
          placeholder='write here'
        ></input>
        <button onClick={onSubmit}>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

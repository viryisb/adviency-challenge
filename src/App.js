import './App.css';
import { useState } from 'react';

const initialList = [
  {
    id: 'a',
    name: 'Medias',
  },

  { id: 'b', name: 'Gorras' },
  { id: 'c', name: 'Remera' },
];

function App() {
  const [list, setList] = useState(initialList);
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleAdd = () => {
    const newList = list.concat({ name });
    setList(newList);
  };

  return (
    <div className='App'>
      <h1>Regalos:</h1>

      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      <div>
        <input type='text' onChange={handleChange} />
        <button type='button' onClick={handleAdd}>
          Add
        </button>
      </div>
    </div>
  );
}

export default App;

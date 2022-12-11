import './App.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

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
    const newList = list.concat({ name, id: uuidv4() });

    setList(newList);

    setName('');
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
        <input type='text' value={name} onChange={handleChange} />
        <button type='button' onClick={handleAdd}>
          Add
        </button>
      </div>
    </div>
  );
}

export default App;

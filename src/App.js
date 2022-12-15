import './App.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import List from './List';
import AddItem from './AddItem';

const initialList = [
  {
    id: 'a',
    name: 'Medias',
  },

  { id: 'b', name: 'Gorras' },
  { id: 'c', name: 'Remera' },
];
const message = 'No hay ningún regalo en la lista. Comienza a agregar';
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

  const handleRemoveItem = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };
  const handleRemoveAll = () => {
    setList([]);
  };
  return (
    <div className='App'>
      <h1>Regalos:</h1>

      {list ? (
        <p>{message}</p>
      ) : (
        <List list={list} onRemove={handleRemoveItem} />
      )}
      <AddItem name={name} onChange={handleChange} onAdd={handleAdd} />
      <button type='button' onClick={handleRemoveAll}>
        remove all
      </button>
    </div>
  );
}

export default App;

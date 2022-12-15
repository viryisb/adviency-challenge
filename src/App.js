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
const handleRemove = (id) => {
  console.log(id);
};

const AddItem = ({ name, onChange, onAdd }) => (
  <div>
    <input type='text' value={name} onChange={onChange} />
    <button type='button' onClick={onAdd}>
      Add
    </button>
  </div>
);
const List = ({ list }) => (
  <ul>
    {list.map((item) => (
      <li key={item.id}>
        {item.name}
        <button type='button' onClick={() => handleRemove(item.id)}>
          Remove
        </button>
      </li>
    ))}
  </ul>
);
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

      <List list={list} />
      <AddItem name={name} onChange={handleChange} onAdd={handleAdd} />
    </div>
  );
}

export default App;

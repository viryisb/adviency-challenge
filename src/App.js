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

const AddItem = ({ name, onChange, onAdd }) => (
  <div>
    <input type='text' value={name} onChange={onChange} />
    <button type='button' onClick={onAdd}>
      Add
    </button>
  </div>
);
const Item = ({ item, onRemove }) => (
  <li key={item.id}>
    {item.name}
    <button type='button' onClick={() => onRemove(item.id)}>
      Remove
    </button>
  </li>
);
const List = ({ list, onRemove }) => (
  <ul>
    {list.map((item) => (
      <Item key={item.id} item={item} onRemove={onRemove} />
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

  const handleRemove = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  return (
    <div className='App'>
      <h1>Regalos:</h1>

      <List list={list} onRemove={handleRemove} />
      <AddItem name={name} onChange={handleChange} onAdd={handleAdd} />
    </div>
  );
}

export default App;

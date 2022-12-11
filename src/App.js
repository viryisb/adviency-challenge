import './App.css';
import useState from 'react';

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
  const handleChange = () => {};
  const handleAdd = () => {};
  return (
    <div className='App'>
      <div>
        <input type='text' onChange={handleChange} />
        <button type='button' onClick={handleAdd}>
          Add
        </button>
      </div>
      <h1>Regalos:</h1>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

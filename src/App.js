import './App.css';

const initialList = [
  {
    id: 'a',
    name: 'Medias',
  },
  { id: 'b', name: 'Gorras' },
  { id: 'c', name: 'Remera' },
];

function App() {
  return (
    <div className='App'>
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

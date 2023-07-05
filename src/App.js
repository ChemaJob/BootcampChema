import logo from './logo.svg';
import './App.css';
import { Characters } from './components/Characters';
import { useEffect, useState } from 'react';

function App() {
  const [characters, setCharacters] = useState([])

  function getCharacters(pageNumber=1) {
    const res = fetch("https://rickandmortyapi.com/api/character")
                .then(response => response.json())
                .then(({ results }) => results)
                .catch(() => {return[]})
              return res;
  }

  async function consoleCharacters(){
    const resp = await getCharacters();
    setCharacters(resp);
    console.log(resp);
  }

  useEffect(() =>{
    consoleCharacters();
  }, []);

  return (
    <div className="App">
      <header className='Header'>
        <img className='Logo' src='/logo.png' alt=''/>
        <h1 className='Terms'>Terms + conditions</h1>
      </header>

      <div className='Hero'>
        <h1>Rick and Morty</h1>
        <h1>See all the characters. And more.</h1>
      </div>

      <main>
        <h1>Character list</h1>
        <hr/>
        <div className='card-container'>
          {
            characters.length > 0 && characters.map(character => (
            <Characters key={character.id} character={character} />
            ))
          }
        </div>
      </main>

      <footer>
      </footer>
    </div>
  );
}

export default App;

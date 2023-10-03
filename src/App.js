import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [lista, setLista] = useState([]);
  const [novoItem, setNovoItem] = useState("");

  useEffect(() => {
    setLista(["Tarefa 1", "Tarefa 2", "Tarefa 3", "Tarefa 4"]);
  }, []);

  const adicionarNovoItem = () => {
    if (novoItem.length <= 0) {
      alert("Por favor, digite algo no campo Tarefa");
      return;
    }

    const itemIndex = lista.indexOf(novoItem);
    if (itemIndex >= 0) {
      alert("Você já adicionou essa tarefa");
    } else {
      setLista([...lista, novoItem]);
      setNovoItem("");
    }
  };

  const deletarItem = (index) => {
    const tmpArray = [...lista];
    tmpArray.splice(index, 1);
    setLista(tmpArray);
  };

  return (
    <div className='container'>
      <div className='new=item'>
        <input
          placeholder='Tarefa'
          value={novoItem}
          onChange={(e) => setNovoItem(e.target.value)}
          type='text'
        ></input>
        </div>
      <button onClick={adicionarNovoItem}>Adicionar</button>
      <ul className='todo-list'>
        {lista.map((item, index) => (
          <li key={index} className='todo-item'>
            {item}
            <button onClick={() => deletarItem(index)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

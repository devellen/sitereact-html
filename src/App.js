import './App.css';
import React from 'react';

function App() {
  return (
    <div className='App'>
      <html>
        <head>
          <title>Form HTML</title>
        </head>
        <body>
          <div>
            <h2>Formulário</h2>
            <label>Email</label><br></br> <input type="text" name="email"></input><br></br>
            <label>Senha</label><br></br> <input type="text" name="senha"></input><br></br>
            <button type='submit'>Salvar</button>
          </div>
        </body>
      </html>
    </div>
  );
}

export default App;

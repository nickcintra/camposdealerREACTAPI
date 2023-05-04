import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import Menu from "./componentes/Menu/Menu";
import Conteudo from "./componentes/Conteudo/Conteudo";

const App = props => (
  <div>
    <BrowserRouter>
      <Menu />
      <Conteudo />
    </BrowserRouter>
  </div>
)

export default App;

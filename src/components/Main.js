import React from 'react';
import Header from './Header';
import Todos from './Todos/Todos';

const Main = (props) => {

  return (
    <div>
        <Header />
        <Todos />
    </div>
  )
}

export default Main
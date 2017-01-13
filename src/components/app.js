import React, { Component } from 'react';
//import { Component } from 'react';  //Linea comentada por mi verificar que todoo ande igual.

import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';

class App extends Component {
  render() {
    return (
        <div>
            <BookList />
            <BookDetail />
        </div>

    );
  }
}


export default App;
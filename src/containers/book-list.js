/**
 * Created by jorge on 08/01/17.
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';


class BookList extends Component {

   /* constructor(props){

        super(props);
        this.state = {};

    }*/

    renderList(){
        return this.props.books.map( (book) => {
            return(
                <li
                    key={book.title}
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
            );
        } )
    }

    render(){

        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }


}

function mapStatetoProps(state) {

    //lo que retorna esta funcion se mapea a las propiedades del componente
    return {
        books:state.books
    };
}

//Cualquier cosa que retorne de esta funcion terminara como props en el BookList container
function mapDispatchToProps(dispatch){

    //Cuando se llame a selectBook, el resultado deberia ser enviado a todos los reducers.
    return bindActionCreators( {selectBook:selectBook}, dispatch);

}

// Promovemos BookList de component a container, debe conocer el nuevo metodo dispatch, selectBook.
// Hacerlo disponible via una prop.

export default connect(mapStatetoProps, mapDispatchToProps)(BookList);
export function selectBook(book){

    //selectBook es un ActionCreator, necesita retornar una accion, que es un objeto con una propiedad type.
    return{
        type: 'BOOK_SELECTED',
        payload:book

    };

}
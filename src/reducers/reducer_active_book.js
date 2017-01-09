/**
 * Created by jorge on 08/01/17.
 */

//El argumento state no es el estado de toda la aplicacion sino solo el estado que es
//responsable este reducer
export default function(state = null, action){

    switch(action.type){

        case 'BOOK_SELECTED':
            console.log(action.payload);
            return action.payload;


    }

    return state;
};
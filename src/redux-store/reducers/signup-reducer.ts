import { UserAction } from "../actions/action"

export interface UserState {
    users: Object[]
}

const initialState = {
    users: []
}


export const SignUpReducer = (state: UserState = initialState, action: UserAction) =>{
  console.log('starting reducer')
    switch(action.type){
        case 'ADD_USER':
            console.log(' initialState inside reducer - 5: ', initialState);
            console.log( 'action inside reducer - 6: ', action);
            console.log('action.payload inside reducer - 7: ', action.payload);
            // add new user 
            return { ...state, users: [...state.users, action.payload]}   
        default: 
        return state    
    }
}

console.log('SignUpReducer inside reducer -3 : ', SignUpReducer);

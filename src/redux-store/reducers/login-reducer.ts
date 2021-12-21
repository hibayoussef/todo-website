import { UserActionLOGIN } from "../actions/action"
import { UserState } from "./signup-reducer"


export const SignInReducer = (state: UserState, action: UserActionLOGIN) =>{
    switch(action.type){
        case 'SIGNIN_USER':
            // add new user 
            return {
                state
            }   
        default: 
        return state    
    }
}
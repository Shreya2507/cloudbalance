const storedUser = localStorage.getItem("authData");
const user = storedUser ? JSON.parse(storedUser) : null;


const initialState = {
    currentUser: user,
    

}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case "LOGIN": 
            localStorage.setItem("authData", JSON.stringify(action.payload));
            return {
                ...state,
                currentUser: action.payload
            }
        
        case "LOGOUT":
            localStorage.removeItem("authData"); 
            return {
                ...state,
                currentUser: null
            }
            
        default: return state
            
    }
}

export default authReducer;
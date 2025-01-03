// src/reducers/counterReducer.js
const initialState = {
    mobile: "PC",
  };
  
  const statusReducer = (state = initialState, action) => {
    console.log(action.payload);
    
    switch (action.type) {
      case 'SET_REQUEST':
        return {
          ...state,
          mobile: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default statusReducer;
  
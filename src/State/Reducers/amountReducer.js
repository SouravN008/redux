const reducer = (State =0 , action)=> {
       if (action.type === 'deposite') {
              return State + action.payload
       }
       else if (action.type === 'withdraw') {
              return State - action.payload
       }
       else {
              return State;
       }
}
export default reducer;
// ./actionCreators/index.js
export const depositeMoney = (amount) => {
       return (dispatch) => {
         dispatch({
           type: "deposite",
           payload: amount
         });
       };
     };
     
     export const withdrawMoney = (amount) => {
       return (dispatch) => {
         dispatch({
           type: "withdraw",
           payload: amount
         });
       };
     };
     
     // You can export other action creators as needed
     
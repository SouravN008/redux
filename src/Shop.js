import React from 'react';
import { useDispatch } from 'react-redux';
import {actionCreators} from './State/index'
import { bindActionCreators } from 'redux';

const Shop = () => {
  const dispatch = useDispatch();
   const {withdrawMoney , depositeMoney} = bindActionCreators(actionCreators, dispatch);
  return (
    <div>
      <h2>Deposit and withdraw money</h2>
      {/* <button className="btn btn-primary mx-2" onClick={() => dispatch(actions.withdrawMoney(100))}>
        -
      </button>
      Balance update
      <button className="btn btn-primary mx-2" onClick={() => {dispatch(actions.depositeMoney(100))}}>
        +
      </button> */}
      <button className="btn btn-primary mx-2" onClick={() => {withdrawMoney(100)}}>
        -
      </button>
      Balance update
      <button className="btn btn-primary mx-2" onClick={() =>{depositeMoney(100)}}>
        +
      </button>
    </div>
  );
};

export default Shop;

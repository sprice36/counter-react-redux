import { connect } from 'react-redux';
import Counter from '../components/Counter';
import {
        actionIncrement, 
        actionDecrement
       } from '../actions';
//map state to props to get updated state
const mapStateToProps = (state) => {
    return {
               count : state.count
    }
};
//map dispatch to props to update redux store
const mapDispatchToProps = (dispatch) => {
    return {
        increment : () => {
            dispatch(actionIncrement())
           },
        decrement : () => {
            dispatch(actionDecrement())
            }
    }
}


const componentConnector = connect(mapStateToProps, mapDispatchToProps);
const connectedCounter = componentConnector(Counter);

export default connectedCounter;
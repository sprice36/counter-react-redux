//step 2 list all the ways to change state

//{ type : 'INCREMENT'}
//{ type : 'DECREMENT'}

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';


//action creators
export const actionIncrement = () => {
    return {
        type : INCREMENT
    };
}


export const actionDecrement = () => {
    return {
        type : DECREMENT
    };
}
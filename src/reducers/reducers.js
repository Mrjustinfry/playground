const initialState = {
};

export const itemReducer = (state=initialState, action) => {
  const {type} = action;
  switch(type){
    default:
      return state;    
  };

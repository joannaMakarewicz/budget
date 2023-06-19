import React from 'react';

const NewInputContext = React.createContext({
    chosenCategory: '',
    setChosenCategory: () => {},
    input:{},
    setInput: () => {}
  
})

export default NewInputContext;

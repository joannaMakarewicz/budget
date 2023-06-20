import React from 'react';

const NewInputContext = React.createContext({
    chosenCategory: '',
    setChosenCategory: () => {},
    input:'',
    setInput: () => {},
    price: '',
    setPrice:() => {},
  
})

export default NewInputContext;

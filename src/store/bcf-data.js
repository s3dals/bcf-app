import React, { useState, useEffect } from 'react';

const bcfContext = React.createContext({
    bcfData: [],
    bcfMarkup: [],
    onaddBCF: (bcfData, bcfComme) => {},
});

export const BCFContextProvider = (props) => {
    const [bcfInfo, setbcfInfo] = useState([]);
    // const [bcfMarkup, sebcfMarkup] = useState([]);
    const [bcfTopics, setbcfTopics] = useState([]);

    useEffect(() => {

    }, [ bcfInfo, bcfTopics]);
  
    const addBCFHandler = (bcfData, bcfComme) => {
        setbcfInfo(bcfData);
        setbcfTopics(bcfComme);
    };


    return (
    <bcfContext.Provider
    value={{
        bcfData: bcfInfo,
        bcfMarkup: bcfTopics,
        onaddBCF: addBCFHandler,
    }}>
        {props.children}
    </bcfContext.Provider>
    );
};
export default bcfContext;


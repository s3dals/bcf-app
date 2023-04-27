import React, { useState, useEffect } from 'react';

const bcfContext = React.createContext({
    bcfData: [],
    bcfMarkup: [],
    onaddBCF: (bcfData, bcfComme) => {},
    onaddMarkup: (bcfData, bcfComme) => {},
});

export const BCFContextProvider = (props) => {
    const [bcfInfo, setbcfInfo] = useState([]);
    // const [bcfMarkup, sebcfMarkup] = useState([]);
    const [bcfTopics, setbcfTopics] = useState([]);

    useEffect(() => {

    }, [ bcfInfo, bcfTopics]);
  
    const addBCFHandler = (bcfData, bcfMarkup) => {
        setbcfInfo(bcfData);
        setbcfTopics(bcfMarkup);
    };

    const addMarkuphandler = (bcfMarkup) => {
        setbcfTopics(bcfMarkup);
    };

    return (
    <bcfContext.Provider
    value={{
        bcfData: bcfInfo,
        bcfMarkup: bcfTopics,
        onaddBCF: addBCFHandler,
        onaddMarkup: addMarkuphandler,
    }}>
        {props.children}
    </bcfContext.Provider>
    );
};
export default bcfContext;


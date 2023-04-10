import React, {useState , useEffect} from 'react';
import Button from '../UI/Button/Button';
import classes from './Export.module.css';
var _ = require('lodash');

const Parser = require("fast-xml-parser").j2xParser;

const defaultOptions = {
    attributeNamePrefix: "topic_",
    // attrNodeName: "Topic", //default is false
    // textNodeName : "#text",
    ignoreAttributes: false,
    // cdataTagName: "__cdatatst", //default is false
    // cdataPositionChar: "\\c",
    format: true,
    indentBy: "  ",
    // suppressEmptyNode: false,
    transformTagName: (tagName) => tagName.toUpperCase(),

    // tagNameProcessor: a=>a + "tessst",
    // tagValueProcessor: a=> he.encode(a, { useNamedReferences: true}),
    // tagValueProcessor: a=>he.charAt(0).toUpperCase() + he.slice(1),
    rootNodeName: "Markup"
};
const parser = new Parser(defaultOptions);

function changeKeysToUpper(obj) {
    var key, upKey;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            upKey = key;

            if (!upKey.includes("topic_")) {
                upKey = _.camelCase(key);
                upKey = upKey.charAt(0).toUpperCase() + upKey.slice(1);

            } else {
                upKey = upKey.charAt(0).toUpperCase() + upKey.slice(1);
            }

            if (upKey !== key) {
                obj[upKey] = obj[key];
                delete (obj[key]);
            }
            // recurse
            if (typeof obj[upKey] === "object") {
                changeKeysToUpper(obj[upKey]);
            }
        }
    }
    return obj;
}
const Export = (props) => {
    const [exportData, setExportData] = useState([]);

    const data =props.data;
    const convertData = [...data];

    useEffect(() => {
        setExportData(convertData);
    }, []);

    
    const exportXSML = () => {
        setExportData(convertData);
        console.log(props.comments);

        // var convertData = [...props.data];

        // changeKeysToUpper(exportData)
        const xml = parser.parse(props.comments);
        console.log(xml);
    };
    return (
        <Button onClick={exportXSML} >Export</Button>
    );
};

export default Export;

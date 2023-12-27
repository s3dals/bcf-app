import React from 'react';
import Button from '../UI/Button/Button';

import { useSelector } from "react-redux";

import { saveAs } from "file-saver";

import JSZip from "jszip";
import * as JSZipUtils from 'jszip-utils';

var zip = new JSZip();
const Parser = require("fast-xml-parser").j2xParser;

const defaultOptions = {
    attributeNamePrefix: "@_",
    // attrNodeName: "Topic", //default is false
    // textNodeName : "#text",
    ignoreAttributes: false,
    format: true,
    indentBy: "  ",
    // suppressEmptyNode: false,
    // transformTagName: (tagName) => tagName.toUpperCase(),
    // tagNameProcessor: a=>a + "tessst",
    // tagValueProcessor: a=> he.encode(a, { useNamedReferences: true}),
    // tagValueProcessor: a=>he.charAt(0).toUpperCase() + he.slice(1),
    // rootNodeName: "Markup"
};
const parser = new Parser(defaultOptions);

async function exportZIP(data) {

    await data.forEach((bcf) => {
        if (!Object.keys(bcf)[0].endsWith('.png') && !Object.keys(bcf)[0].endsWith('.jpeg')) {
            zip.file(Object.keys(bcf)[0], parser.parse(bcf[Object.keys(bcf)[0]]));
        } else {
            JSZipUtils.getBinaryContent(bcf[Object.keys(bcf)[0]], function (err, data) {
                zip.file(Object.keys(bcf)[0], data, { binary: true });
            })
        }
    }
        // console.log(parser.parse(Object.keys(bcf)[0]))
        // console.log(bcf[Object.keys(bcf)[0]])
    );
    setTimeout(function () {
        zip.generateAsync({ type: "blob" }).then(function (blob) {
            saveAs(blob, "bcf-export.bcf");
        });
    }, 1500);


};
const Export = () => {
    const bcfTopics = useSelector((state) => state.topics.bcfData);

    const exportXSML = () => {
        const exportData = bcfTopics
        // console.log(exportData);
        exportZIP(exportData);
    };

    return (
        <Button onClick={exportXSML} >Export</Button>
    );
};

export default Export;

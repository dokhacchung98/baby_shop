import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import React from 'react';

export default function RenderComponent(html) {
    return <div>{ReactHtmlParser(html)}</div>;
}
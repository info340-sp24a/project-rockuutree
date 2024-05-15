import React from 'react';
import ReactDOM from 'react-dom/client';
import { StyleCardList } from './StyleCardList.js';
import '../index.css'

function StylePage(props){
    const {style_data } = props;

    const styleList = [...new Set(style_data)];

    const styleListItem=  styleList.map
    return(
        <StyleCardList style_data ={style_data} />
    );
}

export default StylePage;
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

export function StoreCard(props) {
    const {storeName, storeLink} = props;

    return(
        <div className='store-card'>
            <a href={storeLink} target='_blank' rel='noopener noreferrer'>
                <div className='store-card-content'>
                    <h3>{storeName}</h3>
                    <img src="" />
                </div>
            </a>
        </div>
    );
}

export function StoreCardList(props) {
    const { recommendedStores, recommendedStoreLinks } = props;
    const storeCardList = recommendedStores.map((storeName, currentStore) => (
        <StoreCard key={currentStore} storeName={storeName} storeLink={recommendedStoreLinks[currentStore]} />
    ));

    return (
        <div className='store-card-list'>
            {storeCardList}
        </div>
    );
}

export default StoreCardList;
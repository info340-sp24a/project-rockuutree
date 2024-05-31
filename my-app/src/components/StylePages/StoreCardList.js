import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

export function StoreCard(props) {
    const { storeName, storeLink, storeImage } = props;

    return (
        <div className='store-card'>
            <a href={storeLink} target='_blank' rel='noopener noreferrer'>
                <div className='store-card-content'>
                    <img className='store-card-image' src={require(`../../assets/Store-Images/${storeImage}`)} alt={`the ${storeName} store/logo`} />
                    <p>{storeName}</p>
                </div>
            </a>
        </div>
    );
}


export function StoreCardList(props) {
    const { recommendedStores, recommendedStoreLinks, recommendedStoreImages } = props;
    const storeCardList = recommendedStores.map((storeName, currentStore) => (
        <StoreCard key={currentStore} storeName={storeName} storeLink={recommendedStoreLinks[currentStore]} storeImage={recommendedStoreImages[currentStore]}  />
    ));

    return (
        <div>
            <div className='store-card-list'>
                {storeCardList}
            </div>
        </div>
    );
}

export default StoreCardList;
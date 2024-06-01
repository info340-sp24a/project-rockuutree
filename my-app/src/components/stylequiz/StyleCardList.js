import React from 'react';

export function StyleCard(props){
    const { style_data } = props;

    return(
        <div>
            <div>
                <img className='card-img-top' src={`../../images/${style_data.Main_img}`} alt={`a model in ${style_data.Style_Name} fashion`}/>
            </div>
            <div>
                <h2 className='style-card-title'>{style_data.Style_Name}</h2>
                <p className='long-description'>{style_data.Description}</p>
                <p className='short-description'>{style_data.Short_Description}</p>
                <p className='common-clothing-pieces'>{style_data.Common_Clothing_Pieces}</p>
            </div>
        </div>
    );
}

export function StyleCardList(props){
    const { style_data } = props;

    const styleCardList = style_data.map((style_data) => {
        <StyleCard key={style_data.Style_Name} style_data={style_data}/>
    });
    return(
        <div className='style-Cards'>
            {StyleCardList}
        </div>
    );
    
}

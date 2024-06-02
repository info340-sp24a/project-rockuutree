import React from 'react';



export function StyleCard(props){
    const { style_data } = props;

    return(
        <div className='style-Cards'>
            <div className='style-card-container'>
                <div>
                    <img className='style-card-image' src={require(`../assets/${style_data.Main_img}`)} alt={`a model in ${style_data.Style_Name} fashion`}/>
                </div>
                <div className='style-card-content'>
                    <h2 className='style-card-title'>{style_data.Style_Name}</h2>
                    <p className='long-description'>{style_data.Description}</p>
                    <p className='short-description'>{style_data.Short_Description}</p>
                    <p className='common-clothing-pieces'>{`Common Clothing Pieces: ${style_data.Common_Clothing_Pieces}`}</p>
                    <p className='read-more-button'><a href=''>Read More</a></p>
                </div>
            </div>
        </div>
    );
}

export function StyleCardList(props){
    const { style_data } = props;

    const styleCardList = style_data.map((style) => {
        return <StyleCard key={style.Style_Name} style_data={style}/>
    });
    return(
        <div className='style-Cards-List'>
            {styleCardList}
        </div>
    );
    
}

export default StyleCardList;

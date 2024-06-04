import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import NavBar from './Nav.js'
import { Footer } from "./Footer.js"
import { StyleCard } from "./StyleCardList";
import StoreCardList from './StoreCardList';

export function StyleCardDetailPage(props){
    const {style_data} = props;
    const {styleName} = useParams();
    const style = style_data.find(styleCard => styleCard.URL_Name === styleName);

     /*Nav Bar */
     const [isMenuOpen, setIsMenuOpen] = useState(false);
     const toggleMenu = () => {
         setIsMenuOpen(!isMenuOpen);
     };

     useEffect(() => {
        window.scrollTo(0, 0);
    }, [styleName]);
 

    return(
        <div className="style-card-detail-page">
            <NavBar currentUser={props.currentUser}/>
            <main>
                    <h1 className="style-page-title">{style.Style_Name}</h1>
                    <div className="main-image-detail-container">
                        <img className='style-page-image' src={require(`../assets/${style.Main_img}`)} alt={`a model in ${style.Style_Name} fashion`}/>
                        <p className='detailed-description'>{style.Detailed_Description}</p>
                    </div>
                    <div className='style-card-detail-content'>
                    
                    <div className="lists-container">
                        <div className="clothing-list">
                            <h2 className="style-page-deatil-subheader">Common Clothing Pieces</h2>
                            <CommonClothingPieces commonClothingPieces={style.Common_Clothing_Pieces} />
                        </div>
                        <div className="tips-list">
                            <h2 className="style-page-deatil-subheader">Styling Tips</h2>
                            <StylingTips stylingTips={style.Styling_Tips} />
                        </div>
                    </div>
                    <h2 className="style-page-deatil-subheader">Recommended Stores</h2>
                    <StoreCardList recommendedStores={style.Recommended_Stores} recommendedStoreLinks={style.Recommended_Store_Links} recommendedStoreImages={style.Store_Images} />
                    <h2 className="style-page-deatil-subheader">Related Styles</h2>
                    <RelatedStyles relatedStyles={style.Related_Styles} styleData={style_data} />
                </div>
            </main>
            <Footer />
        </div>
    )
}

export function CommonClothingPieces(props){
    const { commonClothingPieces } = props;

    return (
        <ul className="common-clothing-pieces">
            {commonClothingPieces.map((piece, index) => (
                <li key={index}>{piece}</li>
            ))}
        </ul>
    );
}

export function StylingTips(props) {
    const { stylingTips } = props;

    const makeStylingTipsList = () => {
        return stylingTips.map((tip, index) => (
            <li key={index}>{tip}</li>
        ));
    };

    return (
        <ul className="style-tip">
            {makeStylingTipsList()}
        </ul>
    );
}

export function RelatedStyles(props) {
    const { relatedStyles, styleData } = props;

    const makeRelatedStylesList = () => {
        return relatedStyles.map((relatedStyleName, index) => {
            const relatedStyle = styleData.find(styleCard => styleCard.Style_Name === relatedStyleName);
            return <StyleCard key={index} style_data={relatedStyle} />;
        });
    };

    return (
        <div className="related-styles">
           
            <div className="related-styles-list">
                {makeRelatedStylesList()}
            </div>
        </div>
    );
}

    

export default StyleCardDetailPage;
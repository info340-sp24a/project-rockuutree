import React, {useState} from "react";
import { useParams } from "react-router-dom";
import NavBar from '../nav/nav';
import { Footer } from '../footer/footer';
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
 

    return(
        <div className="style-card-detail-page">
            <NavBar/>
            <main>
                <div className="main-image-header-container">
                    {/* <img className='style-card-image' src={require(`../../assets/${style_data.Main_img}`)} alt={`a model in ${style_data.Style_Name} fashion`}/> */}
                    <h1 className="style-page-title">{style.Style_Name}</h1>
                </div>
                    <div className='style-card-detail-content'>
                    <p className='detailed-description'>{style.Detailed_Description}</p>
                    <CommonClothingPieces commonClothingPieces={style.Common_Clothing_Pieces} />
                    <StylingTips stylingTips={style.Styling_Tips} />
                    <StoreCardList recommendedStores={style.Recommended_Stores} recommendedStoreLinks={style.Recommended_Store_Links} 
                    />
                    <RelatedStyles relatedStyles={style.Related_Styles} styleData={style_data} />
                </div>
            </main>
            <Footer />
        </div>
    )
}

export function CommonClothingPieces(props){
    const { commonClothingPieces } = props;

    const makeCommonClothingPiecesList = () => {
        return commonClothingPieces.map((piece, index) => (
            <li key={index}>{piece}</li>
        ));
    };

    return (
        <ul>
            {makeCommonClothingPiecesList()}
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
        <ul>
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
            <h2>Related Styles</h2>
            <div className="related-styles-list">
                {makeRelatedStylesList()}
            </div>
        </div>
    );
}

    

export default StyleCardDetailPage;
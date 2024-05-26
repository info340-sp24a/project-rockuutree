import React from 'react';
import seasonalColorWheel from '../assets/season-color-wheel.jpeg';
import { Link } from 'react-router-dom';
import NavBar from './Nav.js';
import {Footer} from './Footer.js';
import '../css/style.css';


export default function ColorResultsPage(props) {
    const { result } = props;
    return (
      <>
        <NavBar />
        <main>
            <Result result={result}/>
        </main>
        <Footer />
      </>
    )
}

function Result(props) {
    const { result } = props;
    const palettes = {
        "LightSpring": {
            name: "Light Spring",
            image: seasonalColorWheel,
            description: "Light Spring palettes are characterized by light, warm, and bright colors. These colors often include pastel shades and delicate hues that reflect the fresh, vibrant feel of springtime."
        },
        "WarmSpring": {
            name: "Warm Spring",
            image: "",
            description: "Warm Spring palettes feature warm and bright colors that exude a sunny and cheerful vibe. These palettes include golden yellows, peachy pinks, and warm greens that are reminiscent of the blooming season."
        },
        "ClearSpring": {
            name: "Clear Spring",
            image: "",
            description: "Clear Spring palettes are known for their bright, warm, and clear colors. These colors are vibrant and have a high contrast, making them ideal for a crisp and lively appearance."
        },
        "CoolWinter": {
            name: "Cool Winter",
            image: "",
            description: "Cool Winter palettes include cool, deep, and vibrant colors. These palettes feature icy blues, deep purples, and stark whites, evoking the crisp, clear essence of winter."
        },
        "ClearWinter": {
            name: "Clear Winter",
            image: "",
            description: "Clear Winter palettes are composed of bright, cool, and highly contrasting colors. These colors are sharp and clear, often including jewel tones and pure hues that reflect the clarity of winter."
        },
        "DeepWinter": {
            name: "Deep Winter",
            description: "Deep Winter palettes are characterized by deep, cool, and intense colors. These palettes often include dark blues, rich blacks, and deep reds, embodying the richness and depth of winter."
        },
        "SoftAutumn": {
            name: "Soft Autumn",
            image: "",
            description: "Soft Autumn palettes feature soft, warm, and muted colors. These palettes include earthy tones, gentle browns, and subdued greens, reflecting the mellow and cozy feeling of autumn."
        },
        "WarmAutumn": {
            name: "Warm Autumn",
            image: "",
            description: "Warm Autumn palettes are known for their warm, rich, and muted colors. These palettes encompass the deep reds, burnt oranges, and golden browns that symbolize the warmth and richness of autumn."
        },
        "DeepAutumn": {
            name: "Deep Autumn",
            image: "",
            description: "Deep Autumn palettes are comprised of deep, warm, and rich colors. These palettes often include dark olive greens, deep browns, and maroons, capturing the deep and earthy essence of autumn."
        },
        "CoolSummer": {
            name: "Cool Summer",
            image: "",
            description: "Cool Summer palettes include cool, light, and soft colors. These palettes feature pastel blues, soft lavenders, and gentle pinks, reflecting the cool and serene nature of summer."
        },
        "LightSummer": {
            name: "Light Summer",
            image: "",
            description: "Light Summer palettes are characterized by light, cool, and muted colors. These palettes include soft pastel hues, gentle blues, and cool grays, evoking the breezy and soft atmosphere of summer."
        },
        "SoftSummer": {
            name: "Soft Summer",
            image: "",
            description: "Soft Summer palettes feature soft, cool, and muted colors. These palettes include muted blues, dusty pinks, and soft greens, capturing the calm and hazy feel of summer."
        }
      }
      const resultData = palettes[result];
    return (
        <div className="back w-75 shadow-sm d-flex flex-column">
            <div className="position-relative">
                <p className="h3 text-center">Result:</p>
                <p className="h1 text-center">{resultData.name}</p>
            </div>
            <div className="text-center">
                <img className="img-fluid rounded" src={resultData.image} alt="Question illustration"/>
            </div>
            <div className="position-relative">
                <p className="text-center">{resultData.description}</p>
            </div>
        </div>
    )
}
/* eslint-disable react/prop-types */
import { useState } from "react";

export default function CrisisCart(props) {
    const [showParagraph, setShowParagraph] = useState(false);

    const onClick = () => {
        setShowParagraph(!showParagraph);
    }

    return (
        <div className="flex gap-2 justify-around w-4/5 border-t-2 py-2">
            <div className="w-1/5 flex justify-center items-center">
                <img className={`w-28 transition-max-height duration-100 overflow-hidden ${showParagraph ? 'flex items-center w-4/5' : ''} rounded-md`} src={props.img} />      
            </div>
            <div className="w-3/5">
                <h2 className="text-center font-bold text-xl uppercase">{props.title}</h2>
                <div className={`transition-max-height duration-300 overflow-hidden ${showParagraph ? 'max-h-40' : 'max-h-0'}`}>
                    <p>{props.paragraph}</p>
                </div>
            </div>
            <div className="w-1/5 my-4 cursor-pointer flex justify-center" onClick={onClick}>
                <i className="bi bi-box-arrow-in-down"></i>
            </div>  
        </div>
    )
}

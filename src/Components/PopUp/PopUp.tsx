import "./PopUp.css";
import React from "react";

interface WindowContainer{
    children: React.ReactNode;
}

const PopUp = ({children}: WindowContainer) => {

    return (
        <div className="pop-up bg-dark text-light">
            <div className="pop-up-header d-flex container">
                <div className="pop-up-header-buttons d-flex align-items-center gap-1 w-25">
                    <div className="circle danger"></div>
                    <div className="circle warning"></div>
                    <div className="circle success"></div>
                </div>
                <div className="pop-up-header-title w-50 d-flex align-item-center justify-content-center"></div>
            </div>
            <div className="pop-up-container d-flex align-items-center justify-content-center container py-3">
                {children}
            </div>
        </div>
    )
}

export default PopUp;
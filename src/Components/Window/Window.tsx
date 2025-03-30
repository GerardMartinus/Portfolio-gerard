import "./Window.css";
import React from "react";

interface WindowContainer{
    children: React.ReactNode;
    title?: string
}

const Window = ({title = "Teste", children}: WindowContainer) => {

    return (
        <div className="window bg-dark text-light">
            <div className="window-header d-flex container">
                <div className="window-header-buttons d-flex align-items-center gap-1 w-25">
                    <div className="circle danger"></div>
                    <div className="circle warning"></div>
                    <div className="circle success"></div>
                </div>
                <div className="window-header-title w-50 d-flex align-item-center justify-content-center"><h5 className="my-1">{title}</h5></div>
            </div>
            <div className="window-container container py-3">
                {children}
            </div>
        </div>
    )
}

export default Window;
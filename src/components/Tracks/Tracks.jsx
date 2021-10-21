import React from "react";
import "./tracks.css"

export default function Tracks(){
    return(
        <div className="tracksList">
            <h1>Tracks</h1>
            <div className="tracks">
                <div className="track">
                    <div className="track-info">
                        <div className="track-image1"></div>
                        <p className="track-singer">Mahara Bon</p>
                        <p className="track-name">Sex in Paris</p>
                    </div>
                </div>
                <div className="track">
                    <div className="track-info">
                        <div className="track-image2"></div>
                        <p className="track-singer">Donna</p>
                        <p className="track-name">Pseudo-Life</p>
                    </div>
                </div>
                <div className="track">
                    <div className="track-info">
                        <div className="track-image3"></div>
                        <p className="track-singer">Avven</p>
                        <p className="track-name">Magic</p>
                    </div>
                </div>
                <div className="track">
                    <div className="track-info">
                        <div className="track-image4"></div>
                        <p className="track-singer">Cony Axewl</p>
                        <p className="track-name">Living</p>
                    </div>
                </div>
                <div className="track">
                    <div className="track-info">
                        <div className="track-image5"></div>
                        <p className="track-singer">Lady Gaga</p>
                        <p className="track-name">Oh Daamn</p>
                    </div>
                </div>
                <div className="track">
                    <div className="track-info">
                        <div className="track-image6"></div>
                        <p className="track-singer">Kevin Austin</p>
                        <p className="track-name">Nice Bro</p>
                    </div>
                </div>
                <div className="track">
                    <div className="track-info">
                        <div className="track-image7"></div>
                        <p className="track-singer">Marshmallow</p>
                        <p className="track-name">Electro Dance</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
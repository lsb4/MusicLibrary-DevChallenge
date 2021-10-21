import React from "react";
import "./profileviews.css"

export default function ProfileViews(){
    return(
        <div className="profileViews">
            <h1>Profile Views</h1>
            <div className="profiles">
                <div className="profile">
                    <div className="profile-info">
                        <div className="profile-image1"></div>
                        <div className="profile-text">
                            <p className="profile-name">Jenny Villa</p>
                            <p className="profile-timeAgo">1 day ago</p>
                        </div>
                    </div>
                    <div className="profile-albums">
                        <p>4 albums</p>
                    </div>
                </div>
                <div className="profile">
                    <div className="profile-info">
                        <div className="profile-image2"></div>
                        <div className="profile-text">
                            <p className="profile-name">Aquila</p>
                            <p className="profile-timeAgo">3 days ago</p>
                        </div>
                    </div>
                    <div className="profile-albums">
                        <p>2 albums</p>
                    </div>
                </div>
                <div className="profile">
                    <div className="profile-info">
                        <div className="profile-image3"></div>
                        <div className="profile-text">
                            <p className="profile-name">Jenny Villa</p>
                            <p className="profile-timeAgo">2 weeks ago</p>
                        </div>
                    </div>
                    <div className="profile-albums">
                        <p>5 albums</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
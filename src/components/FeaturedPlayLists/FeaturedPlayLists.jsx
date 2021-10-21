import React from "react"
import "./featuredplaylists.css"

 
export default function FeaturedPlayLists(){
    return(
        <div className="playlists">
            <h1>Featured PlayLists</h1>
            <div className="featured">
                <div className="playlist">
                    <div className="playlist1"></div>
                    <h2>Only STARDUST</h2>
                    <p>24 tracks</p>
                </div>
                <div className="playlist">
                    <div className="playlist2"></div>
                    <h2>Mike Vella</h2>
                    <p>12 tracks</p>
                </div>
                <div className="playlist">
                    <div className="playlist3"></div>
                    <h2>the best singles s2</h2>
                    <p>163 tracks</p>
                </div>
                <div className="playlist">
                    <div className="playlist4"></div>
                    <h2>Indie</h2>
                    <p>138 tracks</p>
                </div>
            </div>
        </div>
    )
}
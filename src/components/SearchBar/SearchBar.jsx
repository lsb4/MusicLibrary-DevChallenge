import "./searchbar.css"
import SearchIcon from '@material-ui/icons/SearchOutlined';

export default function SearchBar(){
    return(
        <div className="searchBar">
            <SearchIcon/>
            <input className="searchBar-input" type="text" placeholder="Search artists, playlists or tracks"/>
        </div>
    )
}
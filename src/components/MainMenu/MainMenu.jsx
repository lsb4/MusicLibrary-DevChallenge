import "./mainmenu.css";
import SettingsIcon from '@material-ui/icons/Settings';
import OverviewIcon from '@material-ui/icons/DataUsage';
import NewsIcon from '@material-ui/icons/FiberNew';
import PlaylistIcon from '@material-ui/icons/PlaylistAdd';
import DiscoverIcon from '@material-ui/icons/RecordVoiceOver';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MessageIcon from '@material-ui/icons/ChatBubbleOutline';
import NotificationIcon from '@material-ui/icons/NotificationsNone';
import AccountIcon from '@material-ui/icons/AccountCircleOutlined';

export default function MainMenu(){
    return(
        <div className="mainMenu">
            <div className="userInfo">
                <div className="userInfo-userImage"></div>                
                <div className="userInfo-userText">
                    <p className="userInfo-name">Dany Schudler</p>
                    <div className="settingButton">
                        <p className="userInfo-editButton">Edit Profile</p>
                        <SettingsIcon/>
                    </div>
                </div>           
            </div>
            <div className="musicOptions">
                <ul className="optionsList">
                    <div className="option">
                        <OverviewIcon/>
                        <li>Overview</li>
                    </div>
                    <div className="option">
                        <NewsIcon/>
                        <li>News</li>
                    </div>
                    <div className="option">
                        <PlaylistIcon/>
                        <li>Playlists</li>
                    </div>
                    <div className="option">
                        <DiscoverIcon/>
                        <li>Discover</li>
                    </div>
                </ul>
            </div>
            <div className="personalOptions">
                <ul className="optionsList">
                    <div className="option">
                       <DashboardIcon/>
                       <li>Dashboard</li>
                    </div>
                    <div className="option">
                        <MessageIcon/>
                        <li>Messages</li>
                    </div>
                    <div className="option">
                        <NotificationIcon/>
                        <li>Notifications</li>
                    </div>
                    <div className="option">
                        <AccountIcon/>
                        <li>Account</li>
                    </div>
                </ul>
            </div>
        </div>
    )
}
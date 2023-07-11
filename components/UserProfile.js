import React, {
    useEffect
} from 'react';

export const UserProfile = () => {
    const [userProfileType, setUserProfileType] = React.useState("");
    const [userChannelNav, setUserChannelNav] = React.useState("Home");

    return (
        <React.Fragment>
            <style>
                {`
                    .Dildaar-UserProfile{
                        position:relative;
                        left:77vw;
                        z-index:1;
                        border-radius:4%;
                        width:437px;
                        background-color:white;
                        align-items: center;
                        align-content: center;
                        
                    }
                    .Dildaar-UserProfileHeader{
                        align-items: center;
                        align-content: center;
                        width:437px;
                        height:100vh;
                        background-color:green;
                    }
                    .Dildaar-UserChannel{
                        position:relative;
                        left:77vw;
                        z-index:1;
                        border-radius:2%;
                        width:437px;
                        background-color:green;
                        align-items: center;
                        align-content: center;
                        
                    }
                    .Dildaar-UserChannelHeader{
                        align-items: center;
                        align-content: center;
                        width:437px;
                        height:100vh;
                        background-color:green;
                    }
                    .Dildaar-UserHistory{
                        position:relative;
                        left:77vw;
                        z-index:1;
                        border-radius:2%;
                        width:437px;
                        background-color:green;
                        align-items: center;
                        align-content: center;
                        
                    }
                    .Dildaar-UserHistoryHeader{
                        align-items: center;
                        align-content: center;
                        width:437px;
                        height:100vh;
                        background-color:green;
                    }
                    .Dildaar-helpAndfeedback{
                        position:relative;
                        left:77vw;
                        z-index:1;
                        border-radius:2%;
                        width:437px;
                        background-color:green;
                        align-items: center;
                        align-content: center;
                    }
                    .Dildaar-helpAndfeedbackHeader{
                        align-items: center;
                        align-content: center;
                        width:437px;
                        height:100vh;
                        background-color:green;
                    }
                `}
            </style>
            {(userProfileType === "profileMenu") ?
                <section className="Dildaar-UserProfile">
                    <img onClick={() => setUserProfileType("")} style={{ translate: "170px 50px", cursor: "pointer" }} src="images/UserProfilePic.png" alt="UserProfilePic.png" />
                    <div className="Dildaar-UserProfileHeader">
                        <div style={{ translate: "0px 60px", borderBottom: "1px solid white" }}>
                            <h4 style={{ translate: "150px 0px" }}>Amina Blonde<br />A_Blonde</h4>
                        </div>
                        <ul style={{ listStyle: "none", translate: "-65px 0px", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                            <li style={{ display: "flex", gap: "1.5rem", cursor: "pointer" }} onClick={() => setUserProfileType("yourChannel")}><img src="images/YourChannel.png" alt="YourChannel.png" /><h3>Your Channel</h3></li>
                            <li style={{ display: "flex", gap: "1.5rem", cursor: "pointer" }} onClick={() => setUserProfileType("addAccount")}><img src="images/AddAccount.png" alt="AddAccount.png" /><h3>Add Account</h3></li>
                            <li style={{ display: "flex", gap: "1.9rem", cursor: "pointer" }} onClick={() => setUserProfileType("viewHistory")}><img src="images/History.png" alt="History.png" /><h3>History</h3></li>
                            <li style={{ display: "flex", gap: "1.5rem", cursor: "pointer" }}><img src="images/download.png" alt="download" /><h3>Downloads</h3></li>
                            <li style={{ display: "flex", gap: "1.5rem", cursor: "pointer" }} onClick={() => setUserProfileType("help&feedback")}><img src="images/Help&Feedback.png" alt="Help&Feedback.png" /><h3>Help & Feedback</h3></li>
                        </ul>
                        <div style={{ translate: "-105px 388px" }}>
                            <button style={{ width: "437px", }}><img src="images/SettingIcon.png" style={{ translate: "-160px 0px", }} alt="SettingIcon.png" />Settings</button>
                        </div>

                    </div>
                </section> : (userProfileType === "yourChannel") ?
                    <section className="Dildaar-UserChannel">
                        <div className="Dildaar-UserChannelTopnav">
                            <ul style={{ listStyle: "none", display: "flex" }}>
                                <li style={{ translate: "-75px -55px", fontSize: "50px", color: "white", cursor: "pointer" }} onClick={() => setUserProfileType("profileMenu")}>{"<"}<span style={{ position: "relative", top: "-10px", left: "20px", color: "white" }}>Amina Blonde</span></li>
                                <li style={{ translate: "135px -30px" }}><img src="images/whiteSearchIcon.png" alt="images/whiteSearchIcon.png" /></li>
                                <li style={{ translate: "140px -30px" }}><img src="images/threeWhiteVerticalDots.png" alt="threeWhiteVerticalDots.png" /></li>
                            </ul>
                        </div>
                        <img style={{ translate: "170px 50px" }} src="images/UserProfilePic.png" alt="UserProfilePic.png" />
                        <div className="Dildaar-UserChannelHeader">
                            <div style={{ translate: "0px 60px", }}>
                                <h3 style={{ translate: "100px 0px", color: "white" }}>Amina Blonde<br /><span style={{ fontSize: "16px", color: "white" }}>A_Blonde  No subscribers No videos<br />More about this channel</span></h3>
                                <ul style={{ listStyle: "none", translate: "-140px -80px" }}><li style={{ display: "flex", gap: "20px" }}><button style={{ backgroundColor: "lightgrey", width: "290px", height: "28px", borderRadius: "22px" }}>Manage Videos</button><button style={{ backgroundColor: "lightgrey", borderRadius: "50%", height: "35px", width: "35px", position: "relative", top: "20px" }}><img src="images/pencilOutlineIcon.png" alt="images/pencilOutlineIcon.png" /></button></li></ul>
                            </div>

                            {(userChannelNav === "Home") ? <>
                                <ul style={{ listStyle: "none", position: "relative", top: "4rem", display: "flex", flexDirection: "row", gap: "49px", borderBottom: "1px solid white" }}>
                                    <li style={{ display: "flex", translate: "-4rem -4rem", cursor: "pointer" }}><h6 style={{ fontSize: "20px", borderBottom: "5px solid black" }}>Home</h6></li>
                                    <li style={{ display: "flex", translate: "-4rem -4rem", cursor: "pointer" }} onClick={() => setUserChannelNav("Videos")}><h6 style={{ fontSize: "20px" }} >Videos</h6></li>
                                    <li style={{ display: "flex", translate: "-4rem -4rem", cursor: "pointer" }} onClick={() => setUserChannelNav("Channel")}><h6 style={{ fontSize: "20px" }}>Channel</h6></li>
                                    <li style={{ display: "flex", translate: "-4rem -4rem", cursor: "pointer" }} onClick={() => setUserChannelNav("About")}><h6 style={{ fontSize: "20px" }}>About</h6></li>
                                </ul>
                                <div>
                                    <ul style={{ listStyle: "none" }}>
                                        <li>HomePage</li>
                                    </ul>
                                </div>
                            </> : (userChannelNav === "Videos") ? <>
                                <ul style={{ listStyle: "none", position: "relative", top: "4rem", display: "flex", flexDirection: "row", gap: "49px", borderBottom: "1px solid white" }}>
                                    <li style={{ display: "flex", translate: "-4rem -4rem", cursor: "pointer" }} onClick={() => setUserChannelNav("Home")}><h6 style={{ fontSize: "20px" }}>Home</h6></li>
                                    <li style={{ display: "flex", translate: "-4rem -4rem", cursor: "pointer" }}><h6 style={{ fontSize: "20px", borderBottom: "5px solid black" }}>Videos</h6></li>
                                    <li style={{ display: "flex", translate: "-4rem -4rem", cursor: "pointer" }} onClick={() => setUserChannelNav("Channel")}><h6 style={{ fontSize: "20px" }}>Channel</h6></li>
                                    <li style={{ display: "flex", translate: "-4rem -4rem", cursor: "pointer" }} onClick={() => setUserChannelNav("About")}><h6 style={{ fontSize: "20px" }}>About</h6></li>
                                </ul>
                                <div>
                                    <ul style={{ listStyle: "none" }}>
                                        <li>VideosPage</li>
                                    </ul>
                                </div>
                            </> : (userChannelNav === "Channel") ? <>
                                <ul style={{ listStyle: "none", position: "relative", top: "4rem", display: "flex", flexDirection: "row", gap: "49px", borderBottom: "1px solid white" }}>
                                    <li style={{ display: "flex", translate: "-4rem -4rem", cursor: "pointer" }} onClick={() => setUserChannelNav("Home")}><h6 style={{ fontSize: "20px" }}>Home</h6></li>
                                    <li style={{ display: "flex", translate: "-4rem -4rem", cursor: "pointer" }} onClick={() => setUserChannelNav("Videos")}><h6 style={{ fontSize: "20px" }}>Videos</h6></li>
                                    <li style={{ display: "flex", translate: "-4rem -4rem", cursor: "pointer" }}><h6 style={{ fontSize: "20px", borderBottom: "5px solid black" }}>Channel</h6></li>
                                    <li style={{ display: "flex", translate: "-4rem -4rem", cursor: "pointer" }} onClick={() => setUserChannelNav("About")}><h6 style={{ fontSize: "20px" }}>About</h6></li>
                                </ul>
                                <div>
                                    <ul style={{ listStyle: "none" }}>
                                        <li>ChannelPage</li>
                                    </ul>
                                </div>
                            </> : (userChannelNav === "About") ? <>
                                <ul style={{ listStyle: "none", position: "relative", top: "4rem", display: "flex", flexDirection: "row", gap: "49px", borderBottom: "1px solid white" }}>
                                    <li style={{ display: "flex", translate: "-4rem -4rem", cursor: "pointer" }} onClick={() => setUserChannelNav("Home")}><h6 style={{ fontSize: "20px" }}>Home</h6></li>
                                    <li style={{ display: "flex", translate: "-4rem -4rem", cursor: "pointer" }} onClick={() => setUserChannelNav("Videos")}><h6 style={{ fontSize: "20px" }}>Videos</h6></li>
                                    <li style={{ display: "flex", translate: "-4rem -4rem", cursor: "pointer" }} onClick={() => setUserChannelNav("Channel")}><h6 style={{ fontSize: "20px" }}>Channel</h6></li>
                                    <li style={{ display: "flex", translate: "-4rem -4rem", cursor: "pointer" }}><h6 style={{ fontSize: "20px", borderBottom: "5px solid black" }}>About</h6></li>
                                </ul>
                                <div>
                                    <ul style={{ listStyle: "none" }}>
                                        <li>AboutPage</li>
                                    </ul>
                                </div>
                            </> : <h1>none</h1>}

                        </div>
                    </section> : (userProfileType === "addAccount") ?
                        <section className="Dildaar-UserChannel">
                            <div>
                                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column" }}>
                                    <li style={{ display: "flex", gap: "100px", position: "relative", top: "30px", left: "-10px" }}><span style={{ cursor: "pointer" }} onClick={() => setUserProfileType("profileMenu")}><img src="images/X_Icon.png" alt="images/X_Icon.png" /></span><span style={{ fontSize: "27px", color: "white", translate: "0px -15px" }}>Accounts</span></li>
                                </ul>
                                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column" }}>
                                    <li style={{ display: "flex" }}><span style={{ display: "flex", flexDirection: "column" }}><a style={{ color: "white" }}>Amina Blonde</a><a style={{ color: "white" }}>A_Blonde</a></span></li>
                                    <li style={{ display: "flex" }}><img style={{ translate: "-70px 0px", height: "48px", width: "50px" }} src="images/UserProfilePic.png" alt="UserProfilePic.png" /><span style={{ display: "flex", flexDirection: "column" }}><a style={{ color: "white" }}>A_Blonde</a></span></li>
                                </ul>
                            </div>

                            <div className="Dildaar-UserProfileHeader">
                                <ul style={{ listStyle: "none", translate: "-65px 0px", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                                    <li><h3 style={{color:"white",fontSize:"22px"}}>Other accounts</h3></li>
                                    <li style={{ display: "flex", flexDirection:"column"}}><h3 style={{color:"white",fontSize:"15px"}}>dildaar.abrahams@younglings.africa</h3><img style={{height:"41px",width:"30px"}} src="images/D_profileIcon.png" alt="images/D_profileIcon.png" /></li>
                                    <li style={{ display: "flex", flexDirection:"column"}}><h3 style={{color:"white",fontSize:"15px"}}>ntlantla.simelela@younglings.africa</h3><img style={{height:"41px",width:"30px"}} src="images/N_profileIcon.png" alt="images/N_profileIcon.png" /></li>
                                </ul>
                                <ul style={{ listStyle: "none", translate: "-65px 50px", display: "flex", flexDirection: "column", gap: "1.5rem" ,}}>
                                    <li style={{ display: "flex", flexDirection:"row",gap:"2rem"}}><img style={{height:"41px",width:"30px"}} src="images/AddAccount.png" alt="images/AddAccount.png" /><h3 style={{color:"white",fontSize:"17px"}}>Add Account</h3></li>
                                    <li style={{ display: "flex", flexDirection:"row",gap:"2rem"}}><img style={{height:"41px",width:"30px"}} src="images/manageAccounts.png" alt="images/manageAccounts.png" /><h3 style={{color:"white",fontSize:"17px"}}>Manage accounts on this device</h3></li>
                                </ul>

                            </div>
                        </section> : (userProfileType === "viewHistory") ?
                            <section className="Dildaar-UserHistory">
                                <div className="Dildaar-UserChannelTopnav">
                                    <ul style={{ listStyle: "none", display: "flex" }}>
                                        <li style={{ translate: "-75px -55px", fontSize: "50px", color: "white", cursor: "pointer" }} onClick={() => setUserProfileType("profileMenu")}>{"<"}<span style={{ position: "relative", top: "-5px", left: "20px", color: "white", fontSize: "27px" }}>History</span></li>
                                        <li style={{ translate: "100px -30px" }}><img src="images/whiteSearchIcon.png" alt="images/whiteSearchIcon.png" /></li>
                                        <li style={{ translate: "140px -35px" }}><img style={{ height: "43px", width: "42px", }} src="images/UserProfilePic.png" alt="images/UserProfilePic.png" /></li>
                                    </ul>
                                </div>
                                <div className="Dildaar-UserHistoryHeader">
                                    <ul style={{ listStyle: "none", translate: "-65px 0px", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                                        <li style={{ display: "flex", gap: "1.5rem" }}><h3 style={{ color: "white" }}>This Week</h3></li>
                                        <li style={{ display: "flex", gap: "1.5rem" }}><img src="images/AddAccount.png" alt="AddAccount.png" /><div style={{ listStyle: "none", position: "relative" }}><span style={{ fontSize: "13px", fontWeight: "bolder", color: "white" }}>Cooking live with Stacey </span><br /><span style={{ fontSize: "12px", fontWeight: "normal", color: "white" }}>Video .  Will smith</span></div></li>
                                        <li style={{ display: "flex", gap: "1.5rem" }}><img src="images/AddAccount.png" alt="AddAccount.png" /><div style={{ listStyle: "none", position: "relative" }}><span style={{ fontSize: "13px", fontWeight: "bolder", color: "white" }}>Cooking live with Stacey </span><br /><span style={{ fontSize: "12px", fontWeight: "normal", color: "white" }}>Video .  Will smith</span></div></li>
                                        <li style={{ display: "flex", gap: "1.5rem" }}><img src="images/AddAccount.png" alt="AddAccount.png" /><div style={{ listStyle: "none", position: "relative" }}><span style={{ fontSize: "13px", fontWeight: "bolder", color: "white" }}>Cooking live with Stacey </span><br /><span style={{ fontSize: "12px", fontWeight: "normal", color: "white" }}>Video .  Will smith</span></div></li>
                                        <li style={{ display: "flex", gap: "1.5rem" }}><h3 style={{ color: "white" }}>May 2023</h3></li>
                                        <li style={{ display: "flex", gap: "1.5rem" }}><img src="images/AddAccount.png" alt="AddAccount.png" /><div style={{ listStyle: "none", position: "relative" }}><span style={{ fontSize: "13px", fontWeight: "bolder", color: "white" }}>Cooking live with Stacey </span><br /><span style={{ fontSize: "12px", fontWeight: "normal", color: "white" }}>Video .  Will smith</span></div></li>
                                        <li style={{ display: "flex", gap: "1.5rem" }}><img src="images/AddAccount.png" alt="AddAccount.png" /><div style={{ listStyle: "none", position: "relative" }}><span style={{ fontSize: "13px", fontWeight: "bolder", color: "white" }}>Cooking live with Stacey </span><br /><span style={{ fontSize: "12px", fontWeight: "normal", color: "white" }}>Video .  Will smith</span></div></li>
                                        <li style={{ display: "flex", gap: "1.5rem" }}><img src="images/AddAccount.png" alt="AddAccount.png" /><div style={{ listStyle: "none", position: "relative" }}><span style={{ fontSize: "13px", fontWeight: "bolder", color: "white" }}>Cooking live with Stacey </span><br /><span style={{ fontSize: "12px", fontWeight: "normal", color: "white" }}>Video .  Will smith</span></div></li>
                                    </ul>
                                </div>
                            </section> : (userProfileType === "viewDownloads") ?
                                <section className="Dildaar-UserProfile">
                                    <img style={{ translate: "170px 50px" }} src="images/UserProfilePic.png" alt="UserProfilePic.png" />
                                    <div className="Dildaar-UserProfileHeader">
                                        <div style={{ translate: "0px 60px", borderBottom: "1px solid white" }}>
                                            <h4 style={{ translate: "150px 0px" }}>Amina Blonde<br />A_Blonde</h4>
                                        </div>
                                        <ul style={{ listStyle: "none", translate: "-65px 0px", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                                            <li style={{ display: "flex", gap: "1.5rem" }}><img src="images/YourChannel.png" alt="YourChannel.png" /><h3>Your Channel</h3></li>
                                            <li style={{ display: "flex", gap: "1.5rem" }}><img src="images/AddAccount.png" alt="AddAccount.png" /><h3>Add Account</h3></li>
                                            <li style={{ display: "flex", gap: "1.9rem" }}><img src="images/History.png" alt="History.png" /><h3>History</h3></li>
                                            <li style={{ display: "flex", gap: "1.5rem" }}><img src="images/download.png" alt="download" /><h3>Downloads</h3></li>
                                            <li style={{ display: "flex", gap: "1.5rem" }}><img src="images/Help&Feedback.png" alt="Help&Feedback.png" /><h3>Help & Feedback</h3></li>
                                        </ul>
                                        <div style={{ translate: "-105px 388px" }}>
                                            <button style={{ width: "437px", }}><img src="images/SettingIcon.png" style={{ translate: "-160px 0px", }} alt="SettingIcon.png" />Settings</button>
                                        </div>

                                    </div>
                                </section> : (userProfileType === "help&feedback") ?
                                    <section className="Dildaar-helpAndfeedback">
                                        <div>
                                            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column" }}>
                                                <li style={{ display: "flex", gap: "100px", position: "relative", top: "20px" }}><span style={{ cursor: "pointer" }} onClick={() => setUserProfileType("profileMenu")}><img src="images/X_Icon.png" alt="images/X_Icon.png" /></span><span style={{ fontSize: "27px" }}>Help</span></li>
                                                <li><span style={{ backgroundColor: "white", position: "relative" }}><input type="text" placeholder="Search Help" style={{ height: "43px", width: "402px", padding: "0px 50px", position: "relative", left: "-70px", top: "-10px" }} /></span><span style={{ position: "relative", zIndex: "1", top: "-49px", left: "-61px" }}><img src="images/search_icon.png" alt="images/search_icon.png" /></span></li>
                                            </ul>
                                        </div>
                                        <div className="Dildaar-helpAndfeedbackHeader">
                                            <ul style={{ listStyle: "none", position: "relative", top: "-30px", left: "-70px" }}>
                                                <li><span style={{ fontSize: "20px", color: "white" }}>Popular Help resources</span></li>
                                            </ul>
                                            <ul style={{ listStyle: "none", position: "relative", top: "-30px", display: "flex", flexDirection: "column", gap: "20px" }}>
                                                <li style={{ display: "flex", gap: "25px" }}><img src="images/helpResourcesIcon.png" alt="images/helpResourcesIcon.png" /><span style={{ fontSize: "20px", color: "white" }}>Manage data</span></li>
                                                <li style={{ display: "flex", gap: "25px" }}><img src="images/helpResourcesIcon.png" alt="images/helpResourcesIcon.png" /><span style={{ fontSize: "20px", color: "white" }}>Manage time on website</span></li>
                                                <li style={{ display: "flex", gap: "25px" }}><img src="images/helpResourcesIcon.png" alt="images/helpResourcesIcon.png" /><span style={{ fontSize: "20px", color: "white" }}>Unsubscribe</span></li>
                                                <li style={{ display: "flex", gap: "25px" }}><img src="images/helpResourcesIcon.png" alt="images/helpResourcesIcon.png" /><span style={{ fontSize: "20px", color: "white" }}>Cancel premium membership</span></li>
                                                <li style={{ display: "flex", gap: "25px", borderTop: "3px solid white", borderBottom: "3px solid white", position: "relative", translate: "0px 10px", left: "-30px", width: "435px", height: "60px", padding: "10px 0px" }}><img style={{ height: "fit-content", translate: "100px 0px" }} src="images/sendFeedbackIcon.png" alt="images/sendFeedbackIcon.png" /><span style={{ fontSize: "20px", color: "white", translate: "100px 0px" }}>Send feedback</span></li>
                                            </ul>
                                        </div>
                                    </section> : <img style={{ cursor: "pointer", translate: "40vw 0vh" }} onClick={() => setUserProfileType("profileMenu")} src="images/UserProfilePic.png" alt="UserProfilePic.png" />}
        </React.Fragment>
    )
}

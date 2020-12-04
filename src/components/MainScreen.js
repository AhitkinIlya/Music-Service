import React, { useState } from 'react'
import { BiChevronLeftCircle, BiChevronRightCircle, BiUser, BiCaretDown, BiSearchAlt } from 'react-icons/bi'
import Search from './Search'
import Main from './Main'
import MediaLibrary from './MediaLibrary'
import Artists from './Artists'
import Albums from './Albums'
import Playlist from './Playlist'


const MainScreen = () => {


    return (
        <div className="mainscreen">
            <div className="mainscreen_header">
                <div className="header_block">
                    <div className="header_navigation">
                        <div className="navigation_back transition_toWhite">
                            <BiChevronLeftCircle size="35px" />
                        </div>
                        <div className="navigation_forward transition_toWhite">
                            <BiChevronRightCircle size="35px"/>
                        </div>
                    </div>
                    <div className="header_categories">
                        <div className="header_categories_item active">
                            <span className="header_categories_title">Плейлисты</span>
                        </div>
                        <div className="header_categories_item">
                            <span className="header_categories_title">Исполнители</span>
                        </div>
                        <div className="header_categories_item">
                            <span className="header_categories_title">Альбомы</span>
                        </div>
                    </div>
                    <div className="header_profile">
                        <div className="profile">
                            <div className="icon_user">
                                <BiUser size="20px"/>
                            </div>
                            <div className="userId_text">50f0g9dfsg4,mfhd0das0as0222222</div>
                            <div className="icon_dropdown">
                                <BiCaretDown />
                            </div>
                        </div>
                        <div className="profile_dropdown">
                            <span className="dropdown_link">Аккаунт</span>
                            <span className="dropdown_link">Профиль</span>
                            <span className="dropdown_link">Выйти</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mainscreen_block">
                <Playlist />
            </div>
        </div>
    )
}

export default MainScreen
import React, { useState } from 'react'
import { BiChevronLeftCircle, BiChevronRightCircle, BiUser, BiCaretDown, BiCaretRight, BiSearchAlt } from 'react-icons/bi'
import mogren from '../img/mogren.jpg'


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
                    <div className="header_search">
                        <div className="search_block">
                            <div className="search_icon">
                                <BiSearchAlt size="25px"/>
                            </div>
                            <input className="search_input" placeholder="Укажите исполнителя, трек или подскаст"/>
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
                <div className="mainscreen_content">
                    <div className="content_genre">
                        <span className="genre_title">Для тебя</span>
                        <span className="genre_description">Чем больше музыки ты слушаешь, тем точнее рекомендации.</span>
                        <ul className="genre_list">
                            <li className="genre_item">
                                <div className="card_block">
                                    <div className="img_block">
                                        <img src={mogren} className="card_img"/>
                                    </div>
                                    <span className="card_title">This is MORGENSTERN</span>
                                    <div className="card_description">This is morgenstern. hit always as shit always you know it</div>
                                    <div className="card_play">
                                        <BiCaretRight color="white" size="25px"/>
                                    </div>
                                </div>
                            </li>
                            <li className="genre_item">
                                <div className="card_block">
                                    <div className="img_block">
                                        <img src={mogren} className="card_img"/>
                                    </div>
                                    <span className="card_title">This is MORGENSTERN</span>
                                    <span className="card_description">This is morgenstern. hit always as shit always you know it</span>
                                    <div className="card_play">
                                        <BiCaretRight color="white" size="25px"/>
                                    </div>
                                </div>
                            </li>
                            <li className="genre_item">
                                <div className="card_block">
                                    <div className="img_block">
                                        <img src={mogren} className="card_img"/>
                                    </div>
                                    <span className="card_title">This is MORGENSTERN</span>
                                    <span className="card_description">This is morgenstern. hit always as shit always you know it</span>
                                    <div className="card_play">
                                        <BiCaretRight color="white" size="25px"/>
                                    </div>
                                </div>
                            </li>
                            <li className="genre_item">
                                <div className="card_block">
                                    <div className="img_block">
                                        <img src={mogren} className="card_img"/>
                                    </div>
                                    <span className="card_title">This is MORGENSTERN</span>
                                    <span className="card_description">This is morgenstern. hit always as shit always you know it</span>
                                    <div className="card_play">
                                        <BiCaretRight color="white" size="25px"/>
                                    </div>
                                </div>
                            </li>
                            <li className="genre_item">
                                <div className="card_block">
                                    <div className="img_block">
                                        <img src={mogren} className="card_img"/>
                                    </div>
                                    <span className="card_title">This is MORGENSTERN</span>
                                    <span className="card_description">This is morgenstern. hit always as shit always you know it</span>
                                    <div className="card_play">
                                        <BiCaretRight color="white" size="25px"/>
                                    </div>
                                </div>
                            </li>
                            <li className="genre_item">
                                <div className="card_block">
                                    <div className="img_block">
                                        <img src={mogren} className="card_img"/>
                                    </div>
                                    <span className="card_title">This is MORGENSTERN</span>
                                    <span className="card_description">This is morgenstern. hit always as shit always you know it</span>
                                    <div className="card_play">
                                        <BiCaretRight color="white" size="25px"/>
                                    </div>
                                </div>
                            </li>
                            <li className="genre_item">
                                <div className="card_block">
                                    <div className="img_block">
                                        <img src={mogren} className="card_img"/>
                                    </div>
                                    <span className="card_title">This is MORGENSTERN</span>
                                    <span className="card_description">This is morgenstern. hit always as shit always you know it</span>
                                    <div className="card_play">
                                        <BiCaretRight color="white" size="25px"/>
                                    </div>
                                </div>
                            </li>
                            <li className="genre_item">
                                <div className="card_block">
                                    <div className="img_block">
                                        <img src={mogren} className="card_img"/>
                                    </div>
                                    <span className="card_title">This is MORGENSTERN</span>
                                    <span className="card_description">This is morgenstern. hit always as shit always you know it</span>
                                    <div className="card_play">
                                        <BiCaretRight color="white" size="25px"/>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <span className="genre_more">Еще</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainScreen
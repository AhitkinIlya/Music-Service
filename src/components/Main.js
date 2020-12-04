import React, { useState } from 'react'
import { BiCaretRight, } from 'react-icons/bi'
import mogren from '../img/mogren.jpg'

const Main = () => {
    
    return (
        <div className="mainscreen_content">
            <div className="content_genre">
                <span className="genre_title">Для тебя</span>
                <span className="genre_description">Чем больше музыки ты слушаешь, тем точнее рекомендации.</span>
                <div className="genre_list">
                    <div className="genre_item card">
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
                    </div>
                    <div className="genre_item card">
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
                    </div>
                    <div className="genre_item card">
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
                    </div>
                    <div className="genre_item card">
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
                    </div>
                    <div className="genre_item card">
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
                    </div>
                    <div className="genre_item card">
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
                    </div>
                    <div className="genre_item card">
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
                    </div>
                    <div className="genre_item card">
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
                    </div>
                </div>
                <span className="genre_more">Еще</span>
            </div>
        </div>
    )
}

export default Main
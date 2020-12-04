import React, { useState } from 'react'
import { BiTime, BiDotsHorizontalRounded, BiCaretRight, BiHeart } from 'react-icons/bi'
import nick from '../img/nickmira.png'

const Playlist = () => {

    return (
        <div className="playlist_content">
            <div className="playlist_content_top">
                <div className="top_image_block">
                    <img src={nick} className="top_image"/>
                </div>
                <div className="top_playlist">
                    <span className="top_name">плейлист</span>
                    <span className="top_title">Produced By Nick Mira (Official)</span>
                    <span className="top_description">whether i was given credit or not, i produced on all these records</span>
                    <div className="top_information">
                        <span className="information_creator">Nick Mira</span>
                        <span className="information_likes">10 066 лайков</span>
                        <span className="information_amount_tracks">198 треков</span>
                        <span className="information_amount_hours">около 9ч. 30мин.</span>
                    </div>
                </div>
            </div>
            <div className="playlist_content_bottom">
                <div className="bottom_actions">
                    <div className="actions_play play">
                        <BiCaretRight color="white" size="25px"/>
                    </div>
                    <div className="actions_favourite">
                        <BiHeart color="white" size="18px" />
                    </div>
                    <div className="actions_others">
                        <BiDotsHorizontalRounded color="white" size="18px"/>
                    </div>
                    {/* <div className="actions_dropdown">
                    </div> */}
                </div>
                <div className="bottom_playlist">
                    <div className="playlist_headers">
                        <span className="headers_number">#</span>
                        <span className="headers_name">название</span>
                        <span className="headers_album">альбом</span>
                        <span className="headers_added">дата добавления</span>
                        <div className="headers_time">
                            <BiTime />
                        </div>
                    </div>
                    <div className="playlist_tracks">
                        <div className="tracks_track">
                            <div className="track_number">1</div>
                            <div className="track_cover">
                                <img src={nick} className="track_cover_img"/>
                            </div>
                            <div className="track_information">
                                <div className="track_name">PRADA ZOMBIE</div>
                                <div className="track_explicit">e</div>
                                <div className="track_artists">Yung Bans</div>
                            </div>
                            <div className="track_album">MISUNDERSTOOD</div>
                            <div className="track_added">17 авг.2019г.</div>
                            <div className="track_duration">2:03</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Playlist
import React, { useState } from 'react'
import { BiHeart, BiRightIndent, BiVolumeFull, BiVolumeLow, BiVolumeMute, BiShuffle, BiSkipNext, BiSkipPrevious, BiRefresh, BiPlayCircle, BiPauseCircle } from 'react-icons/bi'
import cover from '../img/mogren.jpg'

const Player = () => {

    return (
        <div className="player">
            <div className="player_block">
                <div className="player_left">
                    <div className="player_left_cover">
                        <img src={cover} className="cover_img" />
                    </div>
                    <div className="player_left_track">
                        <span className="player_left_name">ПОСОСИ</span>
                        <span className="player_left_artist">MORGENSTERN</span>
                    </div>
                    <div className="player_left_favourite">
                        <BiHeart size="18px"/>
                    </div>
                </div>
                <div className="player_center">
                    <div className="player_center_navigation">
                        <div className="navigation_mix">
                            <BiShuffle size="18px"/>
                        </div>
                        <div className="navigation_pre">
                            <BiSkipPrevious size="25px"/>
                        </div>
                        <div className="navigation_play">
                            <BiPlayCircle size="40px"/>
                        </div>
                        <div className="navigation_next">
                            <BiSkipNext size="25px"/>
                        </div>
                        <div className="navigation_repeat">
                            <BiRefresh size="23px"/>
                        </div>
                    </div>
                    <div className="player_center_progressbar_block">
                        <span className="progressbar_start">0:04</span>
                        <div className="progressbar">
                            <div className="progressbar_current">
                                <div className="current_point"></div>
                            </div>
                        </div>
                        <span className="progressbar_end">3:37</span>
                    </div>
                </div>
                <div className="player_right">
                    <div className="player_right_playlist">
                        <BiRightIndent size="20px"/>
                    </div>
                    <div className="player_right_volume">
                        <div className="volume_icon">
                            <BiVolumeFull size="21px"/>
                        </div>
                        <div className="volume_progressbar">
                            <div className="volume_current">
                                <div className="volume_current_point"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Player
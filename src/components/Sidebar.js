import React, { useState } from 'react'
import { BiHeadphone, BiHomeAlt, BiSearch, BiCollection, BiPlus, BiHeart } from "react-icons/bi"

const Sidebar = () => {
    

  return (
    <div className="sidebar">
		<div className="sidebar_block">
			<div className="sidebar_logo">
				<BiHeadphone color="white" className="logo_img"/>
				<span className="logo_titile">IlyaMusic</span>
			</div>
			<div className="sidebar_navigation">
				<div className="navigation_item transition_toWhite active">
					<BiHomeAlt className="navigation_img" />
					<span className="navigation_title">Главная</span>
				</div>
				<div className="navigation_item transition_toWhite">
					<BiSearch className="navigation_img" />
					<span className="navigation_title">Поиск</span>
				</div>
				<div className="navigation_item transition_toWhite">
					<BiCollection className="navigation_img" />
					<span className="navigation_title">Моя медиатека</span>
				</div>
			</div>
			<div className="sidebar_playlist">
				<span className="playlist_title">Плейлисты</span>
				<div className="playlist_block">
					<div className="playlist_item transition_toWhite">
						<div className="playlist_create">
							<BiPlus color="black" size="25px" className="playlist_svg" />
						</div>
						<span className="playlist_text">Создать плейлист</span>
					</div>
					<div className="playlist_item transition_toWhite">
						<div className="playlist_favourite">
							<BiHeart color="white" size="18px" className="playlist_svg" />
						</div>
						<span className="playlist_text">Любимые треки</span>
					</div>
				</div>
				<div className="plalist_list">
					<span className="list_item transition_toWhite">Мой плейлист №3</span>
					<span className="list_item transition_toWhite">Мой плейлист №2</span>
					<span className="list_item transition_toWhite">Мой плейлист №1</span>
				</div>
			</div>
		</div>
    </div>
  )
}

export default Sidebar
import React, { useState } from 'react'
import { BiSearchAlt } from 'react-icons/bi'

const SearchInput = () => {

    return (
        <div className="header_search">
            <div className="search_block">
                <div className="search_icon">
                    <BiSearchAlt size="25px"/>
                </div>
                <input className="search_input" placeholder="Укажите исполнителя, трек или подскаст"/>
            </div>
        </div>
    )
}
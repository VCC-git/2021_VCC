import React from 'react';
import OptionItem from './../OptionItem/OptionItem';

const OptionList = ({lists, handleOptionBtn}) => {
    // map을 이용하여 OptionItem에 값들을 넣어줌
    const optionItem = lists.map(
        list => (
            <OptionItem number={list.id} title={list.title} on={list.on} image={list.img} handleOptionBtn={handleOptionBtn}/>
        )
    )

    return optionItem
}

export default OptionList;
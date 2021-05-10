import React from 'react';
import * as opItemStyle from '../../../assets/styles/optionItem/optionItem';

const OptionItem = ({ title, on, image, number, handleOptionBtn }) => {
    return (
        <opItemStyle.Container>
            <opItemStyle.Stat>{on ? 'ON' : 'OFF'}</opItemStyle.Stat>
            <opItemStyle.btnBack now={on} onClick={() => handleOptionBtn(number)}>
                <opItemStyle.btnCircle now={on}/>
            </opItemStyle.btnBack>
            <opItemStyle.eachImage src={image}/>
            <opItemStyle.eachTitle>{title}</opItemStyle.eachTitle>
        </opItemStyle.Container>
    );
}

export default OptionItem;
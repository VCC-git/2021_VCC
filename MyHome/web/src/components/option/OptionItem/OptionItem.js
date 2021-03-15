import React, {useState, useEffect} from 'react';
import * as opItemStyle from '../../../assets/styles/optionItem/optionItem';

const OptionItem = ({ title, on, image, number, handleOptionBtn }) => {
    const [stat, setStat] = useState('OFF'); // ON/OFF를 나타내주는 변수

    // on 변수에 따라 stat 변수가 변경됨
    useEffect(() => {
        on === false ? setStat('OFF') : setStat('ON');
    }, [on]);

    return (
        <opItemStyle.Container>
            <opItemStyle.Stat>{stat}</opItemStyle.Stat>
            <opItemStyle.btnBack now={stat} onClick={() => handleOptionBtn(number)}>
                <opItemStyle.btnCircle now={stat}/>
            </opItemStyle.btnBack>
            <opItemStyle.eachImage src={image}/>
            <opItemStyle.eachTitle>{title}</opItemStyle.eachTitle>
        </opItemStyle.Container>
    );
}

export default OptionItem;
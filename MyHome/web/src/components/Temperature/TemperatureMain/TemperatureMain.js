import React, {useState, useEffect} from 'react';
import * as TempMainStyle from '../../../assets/styles/Temperature/main';
import TemperatureImg from '../../../assets/images/thermometer.png';
import CircleTemperature from '../CircleTemperature/CircleTemperature';

const TemperatureMain = ({power, handleTempPower, value, onIncreaseTemp, onDecreaseTemp}) => {
    const [stat, setStat] = useState('OFF'); // ON/OFF를 나타내주는 변수

    useEffect(() => {
        console.log(power);
        setStat(stat => power ? 'ON' : 'OFF' );
    }, [power])

    const tempAlert = () => {
        alert("전원을 켜주세요.")
    }

    const handleOnDecreaseTemp = () => {
        if(power) {
            onDecreaseTemp();
        } else {
            tempAlert()
        }
    }

    const handleOnIncreaseTemp = () => {
        if(power) {
            onIncreaseTemp();
        } else {
            tempAlert()
        }
    }

    return (
        <TempMainStyle.Container>
            <TempMainStyle.MainTitle>
                <TempMainStyle.MainTitleImage src={TemperatureImg}/>
                <TempMainStyle.MainTitleText>Room Temperature</TempMainStyle.MainTitleText>
            </TempMainStyle.MainTitle>
            <TempMainStyle.MainStat>
                <TempMainStyle.MainStatText>{stat}</TempMainStyle.MainStatText>
                <TempMainStyle.MainStatbtnBack onClick={() => handleTempPower(!power)} now={stat}>
                    <TempMainStyle.MainStatbtnCircle onClick={() => handleTempPower(!power)} now={stat}/>
                </TempMainStyle.MainStatbtnBack>
            </TempMainStyle.MainStat>

            <TempMainStyle.TempStatus>
                <TempMainStyle.MiddleTemp>20℃</TempMainStyle.MiddleTemp>

                <TempMainStyle.MinusTemp>
                    <TempMainStyle.MinusBtn onClick={() => handleOnDecreaseTemp()}>-</TempMainStyle.MinusBtn>
                    <TempMainStyle.BeginingTemp>10℃</TempMainStyle.BeginingTemp>
                </TempMainStyle.MinusTemp>

                <TempMainStyle.CircleTemp>
                    <CircleTemperature value={value}></CircleTemperature>
                </TempMainStyle.CircleTemp>

                <TempMainStyle.PlusTemp>
                    <TempMainStyle.EndTemp>30℃</TempMainStyle.EndTemp>
                    <TempMainStyle.PlusBtn onClick={() => handleOnIncreaseTemp()}>+</TempMainStyle.PlusBtn>
                </TempMainStyle.PlusTemp>

            </TempMainStyle.TempStatus>
        </TempMainStyle.Container>
    )
}

export default TemperatureMain;
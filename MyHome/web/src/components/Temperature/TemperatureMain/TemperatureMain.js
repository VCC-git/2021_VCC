import React from 'react';
import * as TempMainStyle from '../../../assets/styles/Temperature/main';
import TemperatureImg from '../../../assets/images/thermometer.png';
import CircleTemperature from '../CircleTemperature/CircleTemperature';

const TemperatureMain = ({ power, handleTempPower, value, onIncreaseTemp, onDecreaseTemp}) => {

    // 경고문 함수
    const tempAlert = () => {
        alert("전원을 켜주세요.")
    }

    // 온도 내려주는 함수 만약 전원이 안 들어오면 경고문 보냄
    const handleOnDecreaseTemp = () => {
        if(power) {
            onDecreaseTemp();
        } else {
            tempAlert()
        }
    }

    // 온도 올려주는 함수 만약 전원이 안 들어오면 경고문 보냄
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
                <TempMainStyle.MainStatText>{power ? 'ON' : 'OFF'}</TempMainStyle.MainStatText>
                <TempMainStyle.MainStatbtnBack onClick={() => handleTempPower(!power)} now={power}>
                    <TempMainStyle.MainStatbtnCircle onClick={() => handleTempPower(!power)} now={power}/>
                </TempMainStyle.MainStatbtnBack>
            </TempMainStyle.MainStat>

            <TempMainStyle.TempStatus>
                <TempMainStyle.MiddleTemp>19℃</TempMainStyle.MiddleTemp>

                <TempMainStyle.MinusTemp>
                    <TempMainStyle.MinusBtn onClick={() => handleOnDecreaseTemp()}>-</TempMainStyle.MinusBtn>
                    <TempMainStyle.BeginingTemp>10℃</TempMainStyle.BeginingTemp>
                </TempMainStyle.MinusTemp>

                <TempMainStyle.CircleTemp>
                    <CircleTemperature value={value}></CircleTemperature>
                </TempMainStyle.CircleTemp>

                <TempMainStyle.PlusTemp>
                    <TempMainStyle.EndTemp>28℃</TempMainStyle.EndTemp>
                    <TempMainStyle.PlusBtn onClick={() => handleOnIncreaseTemp()}>+</TempMainStyle.PlusBtn>
                </TempMainStyle.PlusTemp>

            </TempMainStyle.TempStatus>
        </TempMainStyle.Container>
    )
}

export default TemperatureMain;
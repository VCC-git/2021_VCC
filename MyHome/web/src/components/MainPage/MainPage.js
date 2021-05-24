import React, { useEffect } from 'react';
import OptionList from './../option/OptionList/OptionList';
import TemperatureMain from './../Temperature/TemperatureMain/TemperatureMain'
import * as MainStyle from '../../assets/styles/mainPage/mainPage';
import { connect } from 'react-redux';
import { setAuto } from '../../actions/Auto';
import { setOption } from '../../actions/Option';
import { setTempPower, setTempIncrease, setTempDecrease, setTempValue } from '../../actions/Temp';
import io from "socket.io-client";

const endpoint = 'http://localhost:8080';

// 메인페이지
const MainPage = ({ auto, list, on, temp, onChangeAuto, onChangeOption, onChangeTempPower, onIncreaseTemp, onDecreaseTemp, onChangeTempValue }) => {
    const socket = io(endpoint);

    // 처음 로드했을 때 가져오는 값들
    useEffect(() => {
        socket.emit('homestart', "VCC");
        socket.on("getAuto", (auto) => {
            onChangeAuto(auto ? true : false);
        })
        socket.on("getOption", (lists) => {
            onChangeOption(lists);
        })
        socket.on("getTempPower", (tempPower) => {
            onChangeTempPower(tempPower ? true : false);
        })
    }, [socket, onChangeAuto, onChangeOption, onChangeTempPower])

    // 해당 아이템의 버튼을 누른 경우 opType의 값을 변경한다.
    const handleOptionBtn = (num) => {
        if(auto) {
            alert("자동모드를 해제해주세요");
        } else {
            socket.emit("putOption", list[num-1].title.toLowerCase());
        }
    }

    // 해당 auto 값을 변경한다.
    const handleChangeAuto = () => {
        onChangeAuto(auto ? true : false);
        socket.emit("putAuto");
    }
 
    // 해당 temperature의 전원 값을 변경한다.
    const handleTempPower = () => {
        console.log("temp");
        socket.emit("putTempPower");
    }

    return (
        <MainStyle.Container>
            {/* 좌측 컴포넌트 */}
            <MainStyle.Left>
                {/* 해당 프로젝트 소개 */}
                <MainStyle.IntroHead>

                </MainStyle.IntroHead>
                {/* Option 타이틀 */}
                <MainStyle.OptionTitle>
                    Option
                </MainStyle.OptionTitle>
                <MainStyle.AutoContent>
                    <MainStyle.AutoTitle>Auto</MainStyle.AutoTitle>
                    <MainStyle.BtnBack now={auto} onClick={() => handleChangeAuto()}>
                        <MainStyle.BtnCircle now={auto}/>
                    </MainStyle.BtnBack>
                </MainStyle.AutoContent>
                {/* 가구들의 기능 */}
                <MainStyle.Optioin>
                    {/* 가구들의 기능 리스트 */}
                    <OptionList lists={list} handleOptionBtn={handleOptionBtn}></OptionList>
                </MainStyle.Optioin>
                {/* 온도계 */}
                <MainStyle.Temperature>
                    <TemperatureMain 
                        power={on} 
                        handleTempPower={handleTempPower}
                        value={temp}
                        onIncreaseTemp={onIncreaseTemp}
                        onDecreaseTemp={onDecreaseTemp}
                    />
                </MainStyle.Temperature>
            </MainStyle.Left>
            {/* 우측 컴포넌트 */}
            <MainStyle.Right>
                {/* 온도 그래프 */}
                <MainStyle.TempGraph>

                </MainStyle.TempGraph>
                {/* 습도 그래프 */}
                <MainStyle.HumGraph>

                </MainStyle.HumGraph>
            </MainStyle.Right>
        </MainStyle.Container>
    )
}

let mapStateToProps = (state) => {
    return {
        auto: state.auto.auto,
        list: state.option.lists,
        on: state.temp.on,
        temp: state.temp.temp
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onChangeAuto: (auto) => dispatch(setAuto(auto)),
        onChangeOption: (lists) => dispatch(setOption(lists)),
        onChangeTempPower: (on) => dispatch(setTempPower(on)),
        onIncreaseTemp: () => dispatch(setTempIncrease()),
        onDecreaseTemp: () => dispatch(setTempDecrease()),
        onChangeTempValue: (value) => dispatch(setTempValue(value))
    };
}

// mapStateToProps와 mapDispatchToProps에서 작성한 내용을 적용하는 connect 메소드를 호출
const MainPageConnet = connect(mapStateToProps, mapDispatchToProps)(MainPage);

export default MainPageConnet;
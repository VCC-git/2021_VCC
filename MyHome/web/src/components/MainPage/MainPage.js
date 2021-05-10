import React, { useState, useEffect } from 'react';
import OptionList from './../option/OptionList/OptionList';
import TemperatureMain from './../Temperature/TemperatureMain/TemperatureMain'
import * as MainStyle from '../../assets/styles/mainPage/mainPage';
import { connect } from 'react-redux';
import { setAuto } from '../../actions/Auto';
import { setOption } from '../../actions/Option';
import { setTempPower, setTempIncrease, setTempDecrease } from '../../actions/Temp';
import io from "socket.io-client";
const endpoint = 'http://localhost:8080';

// 메인페이지
const MainPage = ({ auto, list, on, temp, onChangeAuto, onChangeOption, onChangeTempPower, onIncreaseTemp, onDecreaseTemp }) => {
    const [opType, setOpType] = useState(-1); // option 정보를 바꾸면 해당 id를 opType에 저장하여 행동한다.

    // 해당 아이템의 버튼을 누른 경우 opType의 값을 변경한다.
    const handleOptionBtn = (num) => {
        if(auto) {
            alert("자동모드를 해제해주세요");
        } else {
            setOpType(num);
        }
    }

    useEffect(() => {
        const socket = io(endpoint);
        
    }, [])

    // handleOptionBtn에서 opType을 바꾼 후 opList 또한 바꾼다.
    useEffect(() => {
        if(opType !== -1) {
            list.splice(opType-1, 1, {id: opType, title: list[opType-1].title, on: !list[opType-1].on, img: list[opType-1].img});
            onChangeOption(list);
            setOpType(-1);
        }
    }, [opType, list, onChangeOption])

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
                    <MainStyle.BtnBack now={auto} onClick={() => onChangeAuto()}>
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
                        handleTempPower={(value) => onChangeTempPower(value)}
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
        list: state.option.list,
        on: state.temp.on,
        temp: state.temp.temp
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onChangeAuto: () => dispatch(setAuto()),
        onChangeOption: (list) => dispatch(setOption(list)),
        onChangeTempPower: (on) => dispatch(setTempPower(on)),
        onIncreaseTemp: () => dispatch(setTempIncrease()),
        onDecreaseTemp: () => dispatch(setTempDecrease())
    };
}

// mapStateToProps와 mapDispatchToProps에서 작성한 내용을 적용하는 connect 메소드를 호출
const MainPageConnet = connect(mapStateToProps, mapDispatchToProps)(MainPage);

export default MainPageConnet;
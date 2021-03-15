import React, { useState, useEffect } from 'react';
import OptionList from './../option/OptionList/OptionList';
import TemperatureMain from './../Temperature/TemperatureMain/TemperatureMain'
import * as MainStyle from '../../assets/styles/mainPage/mainPage';
import { connect } from 'react-redux';
import { setOptionList, setTempPower, setTempIncrease, setTempDecrease } from '../../actions';

// 메인페이지
const MainPage = ({ list, on, diff, onChangeOption, onChangeTempPower, onIncreaseTemp, onDecreaseTemp }) => {

    const [opList, setOpList] = useState([]), // option에 들어갈 정보
          [opType, setOpType] = useState(-1), // option 정보를 바꾸면 해당 id를 opType에 저장하여 행동한다.
          [tempPowerType, setTempPowerType] = useState(false); // temp의 전원을 담당하는 변수

    // 초반 opList 저장
    useEffect(() => {
        setOpList(state => list);
        setTempPowerType(state => on);
    }, [list, on]);

    // 해당 아이템의 버튼을 누른 경우 opType의 값을 변경한다.
    const handleOptionBtn = (num) => {
        setOpType(num);
    }

    // temp 전원 버튼 누를 시 작동하는 함수 tempPowerType을 바꿈.
    const handleTempPower = (value) => {
        setTempPowerType(value);
    }

    // handleOptionBtn에서 opType을 바꾼 후 opList 또한 바꾼다.
    useEffect(() => {
        if(opType !== -1) {
            opList.splice(opType-1, 1, {id: opType, title: opList[opType-1].title, on: !opList[opType-1].on, img: opList[opType-1].img});
            onChangeOption(opList);
            setOpType(-1);
        }
    }, [opType, opList, onChangeOption])

    useEffect(() => {
        onChangeTempPower(tempPowerType);
    }, [tempPowerType, onChangeTempPower])

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
                {/* 가구들의 기능 */}
                <MainStyle.Optioin>
                    {/* 가구들의 기능 리스트 */}
                    <OptionList lists={opList} handleOptionBtn={handleOptionBtn}></OptionList>
                </MainStyle.Optioin>
                {/* 온도계 */}
                <MainStyle.Temperature>
                    <TemperatureMain 
                        power={tempPowerType} 
                        handleTempPower={handleTempPower}
                        value={diff}
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

// list 값 출력
let mapStateToProps = (state) => {
    return {
        list: state.optionList.list,
        on: state.tempPower.value,
        diff: state.tempOption.diff
    }
}

// onChangeOption을 실행할 경우 dispatch할 action을 정의
let mapDispatchToProps = (dispatch) => {
    return {
        onChangeOption: (list) => dispatch(setOptionList(list)),
        onChangeTempPower: (value) => dispatch(setTempPower(value)),
        onIncreaseTemp: () => dispatch(setTempIncrease()),
        onDecreaseTemp: () => dispatch(setTempDecrease())
    };
}

// mapStateToProps와 mapDispatchToProps에서 작성한 내용을 적용하는 connect 메소드를 호출
const MainPageConnet = connect(mapStateToProps, mapDispatchToProps)(MainPage);

export default MainPageConnet;
import React from 'react';
import * as CircleStyle from '../../../assets/styles/Temperature/circle';

const CircleTemperature = ({value}) => {
    return (
        <CircleStyle.Container>
            <CircleStyle.BackCircle>
                <CircleStyle.BackWhiteCircle>
                    <CircleStyle.WhiteCircle>
                        <CircleStyle.TempText>{value}℃</CircleStyle.TempText>
                    </CircleStyle.WhiteCircle>
                </CircleStyle.BackWhiteCircle>
            </CircleStyle.BackCircle>
        </CircleStyle.Container>
    )
}

export default CircleTemperature;
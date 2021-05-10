import React from 'react';
import * as CircleStyle from '../../../assets/styles/Temperature/circle';

const CircleTemperature = ({value}) => {
    return (
        <CircleStyle.Container>
            <CircleStyle.SvgCircle>
                <CircleStyle.BackCircle cx="75" cy="75" r="70"></CircleStyle.BackCircle>
                <CircleStyle.BackCircle cx="75" cy="75" r="70"></CircleStyle.BackCircle>
            </CircleStyle.SvgCircle>
            <CircleStyle.SvgCircle>
                <defs>
                    <linearGradient id="gradient">
                        <stop offset="0%" stop-color="#5E58EA" />
                        <stop offset="100%" stop-color="#EA5858" />
                    </linearGradient>
                </defs>
                <CircleStyle.GraphCircle stroke="url(#gradient)" fill="#F1F1F1" cx="75" cy="75" r="67"></CircleStyle.GraphCircle>              
            </CircleStyle.SvgCircle>
            <CircleStyle.SvgCircle>
                <CircleStyle.GraphHide cx="75" cy="75" r="67"></CircleStyle.GraphHide>
                <CircleStyle.GraphHide temp={value} cx="75" cy="75" r="67"></CircleStyle.GraphHide>
                <CircleStyle.GraphHide temp={value} cx="75" cy="75" r="67"></CircleStyle.GraphHide>
            </CircleStyle.SvgCircle>
            <CircleStyle.SvgCircle>
                <filter id="dropShadow">
                    <feDropShadow dx="0" dy="5" stdDeviation="6" flood-color="#C1C1C1"/>
                </filter>
                <CircleStyle.InCircle cx="75" cy="75" r="55" filter="url(#dropShadow)"></CircleStyle.InCircle>
            </CircleStyle.SvgCircle>
            <CircleStyle.SvgCircle>
                <filter id="dropShadow2">
                    <feComponentTransfer in="SourceAlpha">
                        <feFuncA type="table" tableValues="1 0"/>
                    </feComponentTransfer>
                    <feGaussianBlur stdDeviation="3"/>                           
                    <feOffset dx="0" dy="0" result="offsetblur"/>                                                        
                    <feFlood flood-color="#C1C1C1" flood-opacity="0.4" result="color"/>            
                    <feComposite in2="offsetblur" operator="in"/> 
                    <feComposite in2="SourceAlpha" operator="in"/>
                    <feMerge>
                        <feMergeNode in="SourceGraphic" />
                        <feMergeNode />
                    </feMerge>
                </filter>
                <CircleStyle.FrontCircle cx="75" cy="75" r="45" filter="url(#dropShadow2)"></CircleStyle.FrontCircle>
            </CircleStyle.SvgCircle>
            <CircleStyle.Value>
                {value}℃
            </CircleStyle.Value>
        </CircleStyle.Container>
    )
}

export default CircleTemperature;
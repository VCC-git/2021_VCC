import styled, {css} from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: auto;
`;

export const SvgCircle = styled.svg`
    width: 200px;
    height: 200px;
    position: absolute;
    top: 60%;
    left: 60%;
    transform: translate(-47%, -47%);
`;

export const BackCircle = styled.circle`
    &:nth-child(1) {
        fill: none;
        stroke: black; 
        stroke-width: 10px;
        stroke-dasharray: 1 11.21;
        stroke-linecap: butt;
    }

    &:nth-child(2) {
        fill: none;
        stroke: white;
        stroke-width: 10px;
        stroke-dasharray: 121.11 500;
        stroke-dashoffset: -49.84;
    }
`;

export const GraphCircle = styled.circle`
    stroke-width: 3px;
`;

export const GraphHide = styled.circle`
    fill: none;
    stroke-width: 4px;

    &:nth-child(1) {
        stroke: #F1F1F1;
        stroke-dasharray: 116.87 500;
        stroke-dashoffset: -47.75;
    }

    &:nth-child(2) {
        stroke: #F1F1F1;
        stroke-dasharray: 257.13 500;
        stroke-dashoffset: -${props => props.temp > 6 ? 2*3.14*67*10*(props.temp-6)/360+164.62 : 164.62};

        ${props => 
            props.temp > 28 &&
                css`
                    display: none;
                `
        }
    }
    
    &:nth-child(3) {
        stroke: #F1F1F1;
        stroke-dasharray: ${props => props.temp > 28 ? 47.75-2*3.14*67*10*(props.temp-28)/360 : 47.75} 500;

        ${props =>
            props.temp > 32 &&
            css`
                display: none;
            `
        }

        stroke-dashoffset: -${props => props.temp > 28 ? 2*3.14*67*10*(props.temp-28)/360 : 0};
    }
`;

export const InCircle = styled.circle`
    fill: white;
`;

export const FrontCircle = styled.circle`
    fill: white;
`;

export const Value = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-60%, -70%);
    font-size: 25px;
    font-weight: bold;
`;
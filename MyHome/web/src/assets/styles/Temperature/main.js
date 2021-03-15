import styled, {css} from 'styled-components';

export const Container = styled.div`
    width: 580px;
    height: 210px;
`;

export const MainTitle = styled.div`
    float: left;
    width: 300px;
    height: 30px;
`;

export const MainTitleImage = styled.img`
    width: 30px;
    height: auto;
    margin-right: 10px;
    float: left;
`;

export const MainTitleText = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: #181733
`;

export const MainStat = styled.div`
    width: 100px;
    float: right;
`;

export const MainStatText = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: #181733;
    float: left;
`;

export const MainStatbtnBack = styled.div`
    margin-top: 4px;
    float: right;
    border-radius: 100px;
    width: 35px;
    height: 16px;

    ${props => 
        props.now === 'OFF' ?
        css`
            background: #D6D6D6;
        ` :
        css`
            background: #5E58EA;
        `
    }
`;

export const MainStatbtnCircle = styled.button`
    position: absolute;
    height: 16px;
    width: 16px;
    border-radius: 100px;
    outline: none;
    background: white;
    border: none;
    box-shadow: 0px 3px 6px #C8C8C8;

    ${props => 
        props.now === 'ON' &&
        css`
            margin-left: 20px;
            box-shadow: 0px 3px 6px #181733;
        `
    }
`;

export const TempStatus = styled.div`
    width: 580px;
    height: 170px;
    position: absolute;
    bottom: 20px;
`;

export const MiddleTemp = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 16px;
    font-weight: bold;
    color: #181733;
`;

export const MinusTemp = styled.div`
    width: 100px;
    height: 30px;
    position: absolute;
    left: 5%;
    top: 55%;
`;

export const MinusBtn = styled.button`
    float: left;
    width: 25px;
    height: 25px;
    font-size: 16px;
    font-weight: bold;
    border: none;
    color: #D4D4D4;
    background: #F1F1F1;
    outline: none;
    box-shadow: 0px 3px 6px #C8C8C8;
    border-radius: 5px;

    &:active {
        box-shadow: inset 0px 3px 6px #C8C8C8;
    }
`;

export const BeginingTemp = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: #181733;
    float: right;
`;

export const CircleTemp = styled.div`
    width: 150px;
    height: 150px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -35%);
`;


export const PlusTemp = styled.div`
    width: 100px;
    height: 30px;
    position: absolute;
    right: 5%;
    top: 55%;
`;

export const EndTemp = styled.div`
    float: left;
    font-size: 16px;
    font-weight: bold;
    color: #181733;
`;

export const PlusBtn = styled.button`
    width: 25px;
    height: 25px;
    font-size: 16px;
    font-weight: bold;
    float: right;
    border: none;
    color: white;
    background: #5E58EA;
    outline: none;
    box-shadow: 0px 3px 6px #C8C8C8;
    border-radius: 5px;

    &:active {
        box-shadow: inset 0px 0px 6px #181733;
    }
`;
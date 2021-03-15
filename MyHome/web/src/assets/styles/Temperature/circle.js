import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: auto;
`;

export const BackCircle = styled.div`
    width: 130px;
    height: 130px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #F1F1F1;
    border-radius: 100px;
`;

export const BackWhiteCircle = styled.div`
    width: 110px;
    height: 110px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: none;
    border-radius: 100px;
    background: white;
    box-shadow: 0px 3px 6px #c0c0c0c0;
`;

export const WhiteCircle = styled.div`
    width: 90px;
    height: 90px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: none;
    border-radius: 100px;
    background: white;
    box-shadow: inset 0px 0px 6px #c0c0c0c0;
`;

export const TempText = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: #181733;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
`;
import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    width: 1300px;
    height: 624px;
    top: 47px;
    left: 120px;
`;

export const Left = styled.div`
    position: relative;
    width: 633px;
    height: 624px;
    float:left;
`;

export const IntroHead = styled.div`
    background: white;
    width: 620px;
    height: 129px;
    box-shadow: 0px 3px 6px #C8C8C8;
    border-radius: 20px;
    float: right;
    margin-bottom: 5px;
`;

export const OptionTitle = styled.div`
    color: #181733;
    font-weight: bold;
    font-size: 40px;
    float: left;
    margin-bottom: 5px;
`;

export const Optioin = styled.div`
    width: 620px;
    height: 129px;
    float: right;
    margin-top: 10px;
`;

export const Temperature = styled.div`
    background: white;
    padding: 20px;
    width: 580px;
    height: 210px;
    box-shadow: 0px 3px 6px #C8C8C8;
    border-radius: 20px;
    position: absolute;
    bottom: 0px;
    right: 0px;
    float: right;
`;

export const Right = styled.div`
    position: relative;
    width: 633px;
    height: 624px;
    float: right;
`;

export const TempGraph = styled.div`
    background: white;
    width: 633px;
    height: 300px;
    margin-bottom: 24px;
    box-shadow: 0px 3px 6px #C8C8C8;
    border-radius: 20px;
`;

export const HumGraph = styled.div`
    background: white;
    width: 633px;
    height: 300px;
    box-shadow: 0px 3px 6px #C8C8C8;
    border-radius: 20px;
`;
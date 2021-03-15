import styled, {css} from 'styled-components';

export const Container = styled.div`
    background: white;
    box-shadow: 0px 3px 6px #C8C8C8;
    border-radius: 20px;
    height: 99px;
    width: 107px;
    padding: 20px 20.25px;
    margin-right: 10px;
    float: left;

    &:last-child {
        margin-right: 0px;
    }
`;

export const Stat = styled.div`
    font-size: 18px;
    font-weight: bold;
    color: #181733;
    float: left;
`;

export const btnBack = styled.div`
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

export const btnCircle = styled.button`
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

export const eachImage = styled.img`
    width: 40px;
    height: auto;
    margin-right: 50px;
    margin-top: 10px;
`;

export const eachTitle = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: #181733;
    float: left;
    margin-top: 2px;
`;
import styled from 'styled-components';

export const Container = styled.div`
    background:${props => props.color ? props.color : props.selected ? '#9549B4' : '#D2D2D2'};
    width:fit-content;
    min-height:35px;
    border-radius:5px;
    box-shadow:0px 10px ${props => props.shadow ? props.shadow : props.selected ? '#70338C' : '#B3B3B3'};
    text-align:center;
    padding:10px;
    color:white;
    font-size:20px;
    font-weight:bold;
    display:flex;
    align-items:center;
    :hover{
        cursor:pointer;
    }
    :active {
        transform: scale(0.9);
        box-shadow:none;
    }
    user-select: none;
`;

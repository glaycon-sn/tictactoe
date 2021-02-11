import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    width:60px;
    height:60px;
    border-radius:5px;
    background:${props => props.color === 'x' ? '#2490E5' : props.color === 'o' ? '#26BD98' : '#D2D2D2'};
    box-shadow:0px 7px ${props => props.selected ? 'none' : '#B3B3B3'};
    display:flex;
    align-items:center;
    justify-content:center;
    :hover{
        cursor:pointer;
    }
    :active {
        transform: scale(0.9);
        box-shadow:none;
    }
    user-select: none;
    margin:15px;
`;

export const Icon = styled.div`
    font-size:20px;
`
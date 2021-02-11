import styled from 'styled-components';

export const Container = styled.div`
    font-family: 'Baloo 2';
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
`

export const Header = styled.div`
    display:flex;
    justify-content: space-around;
    width:30vmax;
`;

export const Hr = styled.div`
    background-color:#B3B3B3;
    margin-top:4vh;
    margin-bottom:4vh;
    min-height:1px;
    min-width:80vw;
`;

export const NameContainer = styled.div`
    display:flex;
`

export const PlayerName = styled.input`
    text-align:center;
    width:fit-content;
    font-family: 'Baloo 2';
    font-size:40px;
    color:#929292;
    border:none;
    :focus{
        border:none;
        box-shadow:none;
        outline:none;
    };
`

export const CellContainer = styled.div`
    display:grid;
    grid-template-columns: repeat(${props => props.rollRepeat}, auto);
`;

export const Footer = styled.div`
`;

export const ButtonContainer = styled.div`
    display:flex;
    width:20vw;
    margin-bottom:${props=>props.margin ? '3vh' : ''};
    justify-content:space-around;
`
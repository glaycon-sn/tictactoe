import { useState } from 'react';
import handleVictory from '../assets/handleVictory';



import Button from '../components/button'
import Cell from '../components/cell'

import * as std from './styles'


function App() {

    const [selected, setSelected] = useState([1, 0, 0])
    const [player1, setPlayer1] = useState('Jogador 1')
    const [player2, setPlayer2] = useState('Jogador 2')
    const [vic1, setVic1] = useState(0)
    const [vic2, setVic2] = useState(0)
    const [player, setPlayer] = useState('x')
    const [cells, setCells] = useState(9)
    const [actives, setActives] = useState([...Array(cells)])


    const handleCell = (id) => {
        let newArray = actives;
        newArray[id] = player;
        setActives(newArray);
        player === 'x' ? setPlayer('o') : setPlayer('x')
        handleVictory(actives, cells, PlayerVictory, player1, player2)
    }

    const PlayerVictory = (name) => {
        alert(`${name} venceu`)
        name=== player1 ? setVic1(vic1 +1) : setVic2(vic2 + 1)
        cleanTable(cells)
    }

    const handleButtons = (id, value) => {
        cleanTable(value)
        let newArray = [0, 0, 0];
        newArray[id] = !newArray[id];
        setSelected(newArray);
    }

    const cleanTable = (value) => {
        setCells(value)
        setActives([...Array(value)])
    }

    const resetAll = () => {
        setPlayer1('Jogador 1')
        setPlayer2('Jogador 2')
        setPlayer('x')
        setVic1(0)
        setVic2(0)
        setActives([...Array(cells)])
    }

    const Name = (e) => {
        if(player === 'x'){
            setPlayer1(e.target.value)
        } else setPlayer2(e.target.value)
    }



    return (
        <std.Container>
            <std.Header>
                <Button
                    text={'Tradicional'}
                    isSelected={selected[0]}
                    action={() => handleButtons(0, 9)}
                />
                <Button
                    text={'Médio'}
                    isSelected={selected[1]}
                    action={() => handleButtons(1, 25)}
                />
                <Button
                    text={'Difícil'}
                    isSelected={selected[2]}
                    action={() => handleButtons(2, 49)}
                />
            </std.Header>
            <std.Hr />
            <std.NameContainer>
                <std.PlayerName
                value={player === 'x'? player1 : player2}
                onChange={e=> Name(e)}
                />
            </std.NameContainer>
            <std.CellContainer
                rollRepeat={Math.sqrt(cells)}
            >
                {[...Array(cells)].map(
                    function (_, i) {
                        return (
                            <Cell
                                key={i}
                                handleClick={() => handleCell(i)}
                                player={actives[i]}
                                id={i}
                            />)
                    }
                )}
            </std.CellContainer>
            <std.Hr />
            <std.Footer>
                <std.ButtonContainer
                margin={true}>
                    <Button
                        text={`${vic1} ponto`}
                        color='#2490E5'
                        shadowColor='#1370B8'
                    />
                    <Button
                        text={`${vic2} ponto`}
                        color='#26BD98'
                        shadowColor='#128669'
                    />
                </std.ButtonContainer>
                <std.ButtonContainer>
                    <Button
                        text='Reiniciar'
                        isSelected={true}
                        action={() => resetAll()}
                    />
                </std.ButtonContainer>
            </std.Footer>
        </std.Container>
    );
}

export default App;

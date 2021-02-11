import React from 'react'

import * as std from './styles'

export default function index({ player,handleClick,id }) {
    return (
        <>
            <std.Container
                onClick={!player ? handleClick : ''}
                selected={!!player}
                color={player}
            >
                <std.Icon
                >
                    {player}
                </std.Icon>
            </std.Container>
        </>
    )
}

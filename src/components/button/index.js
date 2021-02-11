import React from 'react';

import * as std from './styles.js';

function Button({ text, isSelected, color, shadowColor, action }) {
    return (
        <>
            <std.Container
                selected={isSelected}
                color={color}
                shadow={shadowColor}
                onClick={action}
            >
                {text}
            </std.Container>
        </>
    );
}

export default Button;
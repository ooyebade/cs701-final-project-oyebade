import styled from 'styled-components';
import React from 'react';
import { styles } from './styles';

const AnimationStyle = styled.svg `
    animation: rotate 2s linear infinite;
    width: 60px;
    height: 60px;
    align-items: center;
    justify-content: center;

    & .path {
        stroke: ${styles.textForButton};
        stroke-dasharray: 301;
        stroke-dashoffset: 301;
        animation: dash 29.5s linear forwards;

        @keyframes rotate {
            100% {
                transform: rotateZ(90deg);
            }
        }

        @keyframe slider {
            0% {
                stroke-dashoffset: 0;
                stroke: red;
            }
            50% {
                stroke-dasharray: 90, 150;
                stroke-dashoffset: -35;
            }
            100% {
                stroke-dasharray: 90, 150;
                stroke-dashoffset: -124;
            }
        }
    }
`

function Animation(isVisible) {
    return (
        <AnimationStyle>
            <circle
                className='path'
                cx='25'
                cy='25'
                fill='none'
                strokeWidth='8'>
            </circle>
        </AnimationStyle>
    )
}

export default Animation
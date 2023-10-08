import React from 'react'

export const Buttons = ({ onFeedback }) => {
    return (
        <ul>
            <li><button type="button" onClick={() => onFeedback('good')}>Good</button></li>
            <li><button type="button" onClick={() => onFeedback('neutral')}>Neutral</button></li>
            <li><button type="button" onClick={() => onFeedback('bad')}>Bad</button></li>
        </ul>
    )
}
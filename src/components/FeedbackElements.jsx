import React from 'react'
import styles from "./Style.module.css"

export const Buttons = ({ onFeedback }) => {
    return (
        <ul className={styles.OptionList}>
            <li><button type="button" onClick={() => onFeedback('good')}>Good</button></li>
            <li><button type="button" onClick={() => onFeedback('neutral')}>Neutral</button></li>
            <li><button type="button" onClick={() => onFeedback('bad')}>Bad</button></li>
        </ul>
    )
}

export const Statistics = ({ good, neutral, bad, total, percentage }) => {
    return (
        <ul className={styles.StatList}>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive feedback: {percentage}%</li>
        </ul>
    )
}

export const Section = ({ title, children }) => {
    return (
        <section className={styles.Section}>
            <h2>{title}</h2>
            {children}
        </section>
    )
}

export const Notification  = ({ message }) => {
    return (
        <p>{message}</p>
    )
}
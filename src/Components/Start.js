import React from 'react'

export default function Start(props) {
    
    return (
        <div className='text-center questions-container'>
                <h2 className='karla'>Quizzical</h2>
                <h3 className='karla'>A game of trivia</h3>
                <button className='start-button' onClick={props.start}>Start Quiz</button>
        </div>
    )
}

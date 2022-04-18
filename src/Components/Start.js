import React from 'react'

export default function Start(props) {
    
    return (
        <div className='text-center questions-container' data-testid="container">
                <h2 className='karla' data-testid="header">Quizzical</h2>
                <h3 className='karla' data-testid="header-2">A game of trivia</h3>
                <button 
                    name='start-quiz' 
                    className='start-button' 
                    onClick={props.start}
                    data-testid="button"
                >
                    Start Quiz
                </button>
        </div>
    )
}

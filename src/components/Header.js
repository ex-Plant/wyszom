import React from 'react';

export default function Header(props) {
    const {countCartItems} = props;


    // first button is visible on mobile screen and once clicked gets you to the bottom of the
    // page where the basket is, the second on tablet and desktop and is not clickable

    return (
        <header className="row block center header">
            <div>
                <h1>Tom's Attic Record Store</h1>
            </div>
            <div>
                <button
                    className={'clickable'}
                    onClick={() => window.scrollTo({top: 1000000, left: 0, behavior: 'smooth'})}>
                    Cart {''}
                    {countCartItems ? <button className="badge">{countCartItems}</button> : ''}
                </button>
                <button className={'notClickable'}
                        disabled={true}
                    >
                    Cart {''}
                    {countCartItems ? <button className="badge">{countCartItems}</button> : ''}
                </button>


            </div>
        </header>
    );
}

import React, {useEffect, useState} from 'react';

export default function Basket(props) {
    const {cartItems, onAdd, onRemove, onClear} = props;
    const itemsPrice = cartItems.reduce((acc, current) => acc + current.price * current.qty, 0);
    const taxPrice = itemsPrice * 0.23;
    const shippingPrice = itemsPrice > 400 ? 0 : 20;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

    const [basketWidth, setBasketWidth] = useState('');
    const [itemsVisibility, setItemsVisibility] = useState('');

    //check if cart is empty and change class accordingly and show items after one second
    useEffect(() => {
        if (cartItems.length) {
            setBasketWidth(' basket block column-1 ');
            const timeOut = setTimeout(() => {
                setItemsVisibility(' opacity ');
            }, 1000);
            return () => clearTimeout(timeOut);
        } else {
            setBasketWidth(' basketEmpty block column-1 ');
            setItemsVisibility(' noOpacity ');
        }
    }, [cartItems]);


    return (
        <aside className={basketWidth}>
            <h2>Cart Items</h2>
            <div>
                {cartItems.length === 0 && <div>Cart Is Empty</div>}
            </div>
            <section className={itemsVisibility}>

                {cartItems.map((item) => (
                    <div key={item.id} className={"row basketItems "}>
                        <div className={"column-1"}>
                            <p className="column-2 basket-titles">{item.title.split(' -')[0]}</p>
                            <p className="column-2 basket-titles">{item.title.split(' -')[1]}</p>
                        </div>
                        <aside className={'row center'}>
                            <div className="column-2">
                                <button onClick={() => onAdd(item)} className="add">+</button>
                                <button onClick={() => onRemove(item)} className="remove">-</button>
                            </div>
                            <div className="column-2 text-right">
                            <span>
                                {item.qty} x {item.price.toFixed(2)}
                            </span>
                                <span> PLN</span>
                            </div>
                        </aside>

                    </div>
                ))}
                {cartItems.length !== 0 && (
                    <>
                        <section className={'basketSummary'}>
                            <div className="row ">
                                <p className="column-2">Items Price</p>
                                <p className="column-1 text-right">{itemsPrice.toFixed(2)} PLN</p>
                            </div>
                            <div className="row">
                                <p className="column-2">Tax Price</p>
                                <p className="column-1 text-right">{taxPrice.toFixed(2)} PLN</p>
                            </div>
                            <div className="row">
                                <p className="column-2">Shipping Price</p>
                                <p className="column-1 text-right">{shippingPrice.toFixed(2)} PLN</p>
                            </div>
                            <div className="row">
                                <p className="column-2">Total Price</p>
                                <p className="column-1 text-right">{totalPrice.toFixed(2)} PLN</p>
                            </div>
                        </section>
                        <div className="row">
                            <button onClick={() => alert('Implement Checkout')}>
                                Checkout
                            </button>
                        </div>
                        {
                            cartItems.length &&
                            <div className="row">
                            <button onClick={() => onClear()}>
                                Clear Basket
                            </button>
                        </div>

                        }

                    </>
                )}
            </section>
        </aside>);
}

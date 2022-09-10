import React from 'react';
import Product from './Product';

export default function Main(props) {
    const {products, onAdd} = props;
    return <main>
        <section className='main block '>
            <h2>Items in stock</h2>
            <div className='products'>
                {products.map((product) => (
                    <Product key={product.id} product={product} onAdd={onAdd}></Product>
                ))}
            </div>
        </section>

    </main>;
}

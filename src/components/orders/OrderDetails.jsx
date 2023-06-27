import React from 'react'

const OrderDetails = () => {
    return (
        <section className='orderDetails'>
            <main>
                <h1>Order Details</h1>
                <div>
                    <h1>Shipping</h1>
                    <p>
                        <b>Address -</b>
                        {"sankarpur"}
                    </p>
                </div>
                <div>
                    <h1>Contact</h1>
                    <p>
                        <b>Name -</b>
                        {"Bikash"}
                    </p>
                    <p>
                        <b>Phone -</b>
                        {7978677146}
                    </p>
                </div>
                <div>
                    <h1>Status</h1>
                    <p>
                        <b>Order Status -</b>
                        {"Processing"}
                    </p>
                    <p>
                        <b>Placed At -</b>
                        {"23-5-2023"}
                    </p>
                    <p>
                        <b>Delivered At -</b>
                        {"23-5-2024"}
                    </p>
                </div>

                <div>
                    <h1>Payment</h1>
                    <p>
                        <b>Payment Method -</b>
                        {"Online"}
                    </p>
                    <p>
                        <b>Payment Reference -</b>
                        #{"asdfadsaf"}
                    </p>
                    <p>
                        <b>Paid At -</b>
                        {"23-5-2024"}
                    </p>
                </div>

                <div>
                    <h1>Amount</h1>
                    <p>
                        <b>Items Total -</b>
                        ₹ {2102}
                    </p>
                    <p>
                        <b>Shipping Charges -</b>
                        ₹ {200}
                    </p>
                    <p>
                        <b>Tax -</b>
                        ₹ {232}
                    </p>
                    <p>
                        <b>Total Amount -</b>
                        ₹ {2102+200+232}
                    </p>

                </div>

                <article>
                    <h1>Order Items</h1>
                    <div>
                        <h4>Cheese Burger</h4>
                        <div>
                            <span>{17}</span> x <span>{123}</span>
                        </div>
                    </div>

                    <div>
                        <h4>Veg Cheese Burger</h4>
                        <div>
                            <span>{7}</span> x <span>{453}</span>
                        </div>
                    </div>

                    <div>
                        <h4>Burger Fries</h4>
                        <div>
                            <span>{10}</span> x <span>{1800}</span>
                        </div>
                    </div>

                    <div>
                        <h4 style={{fontWeight:800}}>Sub-Total</h4>
                        <div style={{fontWeight:800}}>
                        ₹ {2134}
                        </div>
                    </div>
                </article>
            </main>
        </section>
    )
}

export default OrderDetails

import React from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineEye} from 'react-icons/ai';

const Orders = () => {
    return (
        <section className='orders'>
            <main>
                <table>
                    <thead>
                        <tr>
                            <th>Order Id</th>
                            <th>Status</th>
                            <th>Item Qty</th>
                            <th>Amount</th>
                            <th>Payment Method</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#adsdsa</td>
                            <td>Processing</td>
                            <td>23</td>
                            <td>₹ {230}</td>
                            <td>COD</td>
                            <td><Link to={`/order/${"asdf"}`}><AiOutlineEye/></Link></td>
                        </tr>
                    </tbody>
                </table>
            </main>
        </section>
    )
}

export default Orders

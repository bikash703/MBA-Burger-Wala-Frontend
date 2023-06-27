import React from "react";
import { Link } from 'react-router-dom';
import {AiOutlineEye} from 'react-icons/ai';
import {GiArmoredBoomerang} from 'react-icons/gi';

const Order = () => {

    const arr = [1, 2, 3, 4]
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
                            <th>User</th>
                            <th>Payment Method</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            arr.map((i) => (
                                <tr key={i}>
                                    <td>#adsdsa</td>
                                    <td>Processing</td>
                                    <td>23</td>
                                    <td>₹ {230}</td>
                                    <td>Bikash</td>
                                    <td>COD</td>
                                    <td style={{display:"flex",gap:"8px"}}><Link to={`/order/${"asdf"}`}><AiOutlineEye /></Link>
                                    <GiArmoredBoomerang />
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </main>
        </section>
    )
}

export default Order;

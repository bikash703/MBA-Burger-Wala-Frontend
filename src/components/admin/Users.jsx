import React from 'react';
import me from '../../assests/founder2.jpg';

const Users = () => {
  return (
    <section className='orders'>
            <main>
                <table>
                    <thead>
                        <tr>
                            <th>Users Id</th>
                            <th>Name</th>
                            <th>Photo</th>
                            <th>Role</th>
                            <th>Since</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#adsdsa</td>
                            <td>Bikash</td>
                            <td>
                                <img src={me} alt="user" />                        
                            </td>
                            <td>Admin</td>
                            <td>{"23-4-2022"}</td>
                        </tr>
                    </tbody>
                </table>
            </main>
        </section>
  )
}

export default Users


import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Table } from 'react-bootstrap';
import { deleteUser } from '../reduxToolkit/user/userSlice';
import '../App.css'
import { Link, useNavigate } from 'react-router-dom';
const ListContent = (props) => {
    const dispatch = useDispatch()
    const userList = useSelector((state) => state.users.value)
    const navigate = useNavigate()
    const [hidde, setHidde] = useState(false)
    return (
        <div className='App'>
            <button className='btn btn-primary' onClick={() => { navigate('/adduser') }}>Create User</button>
            <div className="usersList">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Country</th>
                            <th>Action on/off</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userList.map((user, index) => (
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.stack}</td>
                                <td>{user.age}</td>
                                <td>{user.country}</td>
                                <td>{user.isChecked ? <h2>on</h2>: <h2>off</h2>}</td>
                                <td>
                                    <Link to={`edituser/${user.id}`}><button className='btn btn-success'>Edit</button></Link>
                                    <button className="btn btn-danger" onClick={() => {
                                        dispatch(deleteUser({ id: user.id }))
                                    }}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default ListContent;
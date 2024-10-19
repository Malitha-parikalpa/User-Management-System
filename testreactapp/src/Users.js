import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UsersTable from "./UsersTable";
import Axios from "axios";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [selectUser, setSelectUser] = useState({});

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () => {
        Axios.get('http://localhost:3001/api/users')
            .then(response => {
                setUsers(response?.data?.response);
            })
            .catch(error => {
                console.error("Axios Error : ", error);
            });
    };

    const addUser = (data) => {
        setSubmitted(true);
        const payload = { id: data.id, name: data.name };
        Axios.post('http://localhost:3001/api/createuser', payload)
            .then(() => {
                getUsers();
                setSubmitted(false);
                setIsEdit(false);
            })
            .catch(error => {
                console.error("Axios Error : ", error);
            });
    };

    const updateUser = (data) => {
        setSubmitted(true);
        const payload = { id: data.id, name: data.name };
    
        Axios.put('http://localhost:3001/api/updateusers', payload) // Make sure to use PUT method
            .then(() => {
                getUsers(); // Refresh list after update
                setSubmitted(false);
                setIsEdit(false);  // Fix this line
            })
            .catch(error => {
                console.error("Axios Error : ", error);
            });
    };
    

    const deleteUser = (data) => {
        Axios.delete(`http://localhost:3001/api/deleteuser/`)
            .then(() => {
                getUsers(); // Refresh list after deletion
            })
            .catch(error => {
                console.error('Error deleting user:', error);
            });
    };
    
    
    

    return (
        <Box sx={{ width: 'calc(100% - 100px)', margin: 'auto', marginTop: '100px' }}>
            <UserForm
                addUser={addUser}
                updateUser={updateUser}
                submitted={submitted}
                data={selectUser}
                isEdit={isEdit}
            />
            <UsersTable
                rows={users}
                selectUser={(data) => {
                    setSelectUser(data);
                    setIsEdit(true);
                }}
                deleteUser={data => window.confirm('Are you sure ?') && deleteUser(data)}
            />
        </Box>
    );
};

export default Users;

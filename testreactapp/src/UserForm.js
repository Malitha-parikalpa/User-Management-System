import React, { useEffect, useState } from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';
// import { addUser } from '../../backend/controller';

const UserForm = ({addUser,updateUser,submitted,data,isEdit}) => {

    const [id, setId] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        if (!submitted){
            setId(0);
            setName('');
        }
    }, [submitted]);


    useEffect(() =>{
        if(data?.id && data.id !==0)
        {
            setId(data.id);
            setName(data.name)
        }
    },[data]);
    return (
        <Grid
            container
            spacing={2}
            sx={{
                backgroundColor: '#ffffff',
                marginBottom: '30px',
                display: 'block',
            }}
        >
            <Grid item xs={12}> 
                <Typography component={'h1'} sx={{ color: '#000000' }}>User Form</Typography>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography 
                    component={'label'} 
                    htmlFor='id'
                    sx={{
                        color: '#000000',
                        marginRight: '20px',
                        fontSize: '16px',
                        width: '100px',
                        display: 'block',
                    }}
                >
                    ID
                </Typography>
                <TextField 
                    type='number'
                    id='id'
                    size='small'
                    name='id'
                    sx={{ width: '100%' }}
                    value={id}
                    onChange={e => setId(e.target.value)}
                />
            </Grid>

            <Grid item xs={12} sm={6} sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography 
                    component={'label'} 
                    htmlFor='name'
                    sx={{
                        color: '#000000',
                        marginRight: '20px',
                        fontSize: '16px',
                        width: '100px',
                    }}
                >
                    Name
                </Typography>
                <TextField 
                    type='text'
                    id='name'
                    name='name'
                    size='small'
                    sx={{ width: '100%' }}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </Grid>

            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
            variant="contained"
            sx={{
                margin :'auto',
                marginBottom:'20px', 
                backgroundColor: '#00c6e6',
                color: '#000000',
                marginLeft: '15px',
                marginTop:'20px',
                '&:hover': {
                    opacity: '0.7',
                    backgroundColor: '#00c6e6',
                },
            }}
            onClick={() => {
                if (isEdit) {
                    updateUser({ id, name }); // Ensures the updated user is sent
                } else {
                    addUser({ id, name });
                }
            }}
        >
            {isEdit ? 'Update' : 'Add'}
        </Button>

            </Grid>
        </Grid>
    );
}

export default UserForm;

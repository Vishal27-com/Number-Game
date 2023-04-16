import React, { useState } from 'react'
import {Box, Button, Input, Select, Stack, Text} from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { ADD_USER } from '../Redux/type'
import { useNavigate } from 'react-router-dom'
const init={
    name:'',
    level:''
}
const Home = () => {
    const [formData,setFormData]=useState(init)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const changeHandler=(e)=>{
      const {name,value}=e.target;
      setFormData({
        ...formData,[name]:value
      })
    }
    const submitHandler=()=>{
          dispatch({type:ADD_USER,payload:formData})
          navigate('/play')
    }
  return (
    <Box bg='teal' w='25%' m='20px auto' p='15px'>
        <Stack spacing={5}>
        <Box>
       <Text>Name</Text>
       <Input type='text' name='name'  onChange={changeHandler}/>
        </Box>
    <Box>       
    <Text>Level</Text> 
       <Select name='level' onChange={changeHandler}>
        <option value="">Level</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
        </Select> 
        </Box> 
        </Stack>
        <Button onClick={submitHandler} m='20px 0' colorScheme='green'>Submit</Button>
    </Box>
  )
}

export default Home
import React, { useEffect, useState } from 'react'
import {Box, Flex, Text} from '@chakra-ui/react'
import { getLeaderboard } from '../Redux/action'
import { useDispatch, useSelector } from 'react-redux';
const Leaderboard = () => {
  const {leaderboard}=useSelector(store=>store);
  const dispatch=useDispatch()
  const getData=()=>{
   dispatch(getLeaderboard())
  }
  useEffect(()=>{
  getData()
  },[])
  return (
    <Box>
  {
   leaderboard.map((item,ind)=>
   <Flex key={item.id} justify='space-between' p='10px' border='1px solid yellow' m='10px auto' w='30%'>
    <Text>{ind+1}</Text>
    <Text>{item.name}</Text>
    <Text>{item.score}</Text>
   </Flex>
   )
  }
    </Box>
  )
}

export default Leaderboard
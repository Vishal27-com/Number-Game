import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { generateRandomNumber } from '../Components/randomNumber';
import {Box, Button, Flex, Stack} from '@chakra-ui/react'
import NumberCard from '../Components/NumberCard';
import Timer from '../Components/Timer';
import MyModal from '../Components/MyModal';
import { ADD_RESULT } from '../Redux/type';
import { getScore } from '../Components/getScore';
import { postResult } from '../Redux/action';
let init_time=0;
const Play = () => {
  const state=useSelector(store=>store);
  if(state.user.level==='easy')init_time=60
  else if(state.user.level==='medium')init_time=40
  else init_time=30
  const [time,setTime]=useState(init_time)
  const [num,setNum]=useState([])
  const dispatch=useDispatch()
  const [isOpen,setIsOpen]=useState(false)
  const getRandomNumber=()=>{
       setNum(generateRandomNumber(state.user.level));
  }
  const submitHandler=()=>{
      let score=getScore(num,state.user.level)
      dispatch({type:ADD_RESULT,payload:score})
      setIsOpen(true)
  }
  useEffect(()=>{
   getRandomNumber()
  },[])
  return (
    <Box>
    <Box align='right' p='0px 10px'>
    <Timer time={time} setTime={setTime} setIsOpen={setIsOpen} />
    <br />
    <Button onClick={submitHandler} m='10px 0' colorScheme='green'>Submit</Button>
    </Box>  
    <Flex justify='center' align='center' h='90vh'>
      <Stack>
      {
        num.map((item)=>
        <NumberCard item={item} />
        )
      }
      </Stack>
    </Flex>
      <MyModal getRandomNumber={getRandomNumber} isOpen={isOpen} setIsOpen={setIsOpen} />
      </Box>
  )
}

export default Play
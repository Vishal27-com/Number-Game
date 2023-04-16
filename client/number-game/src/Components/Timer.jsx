import { Button, Text } from '@chakra-ui/react'
import { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { ADD_RESULT } from '../Redux/type'

const Timer = ({time,setTime,setIsOpen}) => {
    const ref=useRef(null)
    const dispatch=useDispatch()
    const startTimer=()=>{
        if(ref.current!==null){
            clearInterval(ref.current)
        }
        ref.current=setInterval(()=>{
           setTime(time=>time-1)
        },1000)
    }
    useEffect(()=>{
       startTimer()
    },[])
    useEffect(()=>{
        if(time===0){
            dispatch({type:ADD_RESULT,payload:0})
            setIsOpen(true)
         return clearInterval(ref.current)
        }
    },[time])
  return (
    <Button colorScheme='yellow'>{time}</Button>
  )
}

export default Timer
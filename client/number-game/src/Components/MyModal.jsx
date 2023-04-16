import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    Button,
    Text,
    Center,
  } from '@chakra-ui/react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { postResult } from '../Redux/action';
import { useNavigate } from 'react-router-dom';
const MyModal = ({isOpen,setIsOpen,getRandomNumber}) => {
    const navigate=useNavigate()
    const {user}=useSelector(store=>store);
    const onClose=()=>{
        setIsOpen(false)
        postResult(user)
    }
    const quitHandler=()=>{
      postResult(user)
      navigate('/')
    }
    const playAgain=()=>{
      getRandomNumber()
      postResult(user)
      onClose()
    }
    return (
      <>  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalBody>
                <Center fontSize='25px' fontWeight='600'>
                {
                    user.score===0?
                    <Text>Game Over</Text>: 
                    <Text>You Won</Text> 
                }
                </Center>
            <Center mt='20px'>
              
            {
                user.score===0?<Button colorScheme='yellow' mr={3} onClick={onClose}>Retry</Button>:
                <Button colorScheme='yellow' mr={3} onClick={playAgain}>Play Again</Button>
            }
            
              <Button variant='solid' colorScheme='red' onClick={quitHandler}>Quit</Button>
            </Center>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default MyModal
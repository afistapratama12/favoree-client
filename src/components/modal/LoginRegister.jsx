import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    usePrefersReducedMotion,
    InputGroup,
    InputRightElement,
    IconButton,
    useDisclosure,
    HStack
  } from '@chakra-ui/react';
import axios from 'axios';
import { useState, useRef } from "react"

import { HiEye, HiEyeOff } from "react-icons/hi"
import { API } from '../../API/api';
import { base_url } from '../../API/axios';
import { isNumber, shake } from './ModalTransfer';

// silahkan mendaftar

// modal for login and register
// TODO: belum handle error
export const ModalLoginRegister = ({parentIsOpen, closeModal, data, setData, onOpen, modalType = "login"}) => {
    const initialRef = useRef(null);
    const finalRef = useRef(null);
    
    const [type, setType] = useState(modalType)

    const preferReducedMotion = usePrefersReducedMotion();

    const animation = preferReducedMotion ? undefined : `${shake} 0.5s ease 1`;

    const [shaked, setShaked] = useState(false);

    const { isOpen, onToggle } = useDisclosure()
  
    const [loading, setloading] = useState(false)

    const onClickReveal = () => {
      onToggle()
    }

    // error
    const [errorMsg, setErrorMsg] = useState({
        username: "",
        phone_number: "",
        email: "",
        password: ""
    })

    const onBlurError = (e, fieldName) => {
        switch (fieldName) {
            case "username":
                if (data.username === "") {
                    setErrorMsg({...errorMsg, username: "Username tidak boleh kosong"})
                } else if (data.username.split(" ").length > 1) {
                    setErrorMsg({ ...errorMsg, username : "Username tidak boleh ada spasi atau simbol"})
                } else {
                    setErrorMsg({...errorMsg, username : ""})
                }
                return
            case "phone_number":
                if (data.phone_number !== "" && data.phone_number.length !== 0 && !isNumber(data.phone_number)) {
                    setErrorMsg({...errorMsg, phone_number: "Masukkan nomer yang benar"})
                } else if (data.phone_number !== "" && data.phone_number.length < 8) {
                    setErrorMsg({...errorMsg, phone_number: "Nomor telepon minimal 8 digit"})
                } else {
                    setErrorMsg({...errorMsg, phone_number : ""})
                }
                return
            case "email":
                if (data.email === "") {
                    setErrorMsg({...errorMsg, email : "Email tidak boleh kosong"})
                } else {
                    setErrorMsg({...errorMsg, email : ""})
                }
                return
            case "password":
                if (data.password === "") {
                    setErrorMsg({...errorMsg, password : "Password tidak boleh kosong"})
                } else if (type === "register" && data.password < 8) {
                    setErrorMsg({...errorMsg, password : "Password minimal 8 karakter"})
                } else {
                    setErrorMsg({...errorMsg, password : ""})
                }
                return
            default:
                return
        }
    }


    // submitting
    const submitData = async () => {
        if (errorMsg.username !== "" ||
            errorMsg.password !== "" ||
            errorMsg.email !== "" ||
            errorMsg.phone_number !== "") {
                
            setShaked(true)
            return
        }

        setloading(true)

        try {
            if (type === "login" ) {
                const resp = await axios.post(base_url + API.users.login, {
                    email: data.email,
                    password: data.password
                })

                if (resp?.status === 200) {
                    localStorage.setItem("user_access_token", resp?.data?.token)
                    localStorage.setItem("user_fullname", resp?.data?.full_name)
                    localStorage.setItem("user_email", resp?.data?.email)
                    localStorage.setItem("user_username", resp?.data?.username)
                    localStorage.setItem("user_is_subscribe", resp?.data?.is_subscribe)

                    closeModal()
                    setErrorMsg({
                        username: "",
                        phone_number: "",
                        email: "",
                        password: ""
                    })

                    onOpen()
                }
            } else if (type === "register") {
                
                const resp = await axios.post(base_url + API.users.register, data)

                if (resp?.status === 201) {
                    localStorage.setItem("user_access_token", resp?.data?.token)
                    localStorage.setItem("user_fullname", resp?.data?.full_name)
                    localStorage.setItem("user_email", resp?.data?.email)
                    localStorage.setItem("user_username", resp?.data?.username)
                    localStorage.setItem("user_is_subscribe", resp?.data?.is_subscribe)
                
                    closeModal()
                    setErrorMsg({
                        username: "",
                        phone_number: "",
                        email: "",
                        password: ""
                    })

                    onOpen()
                }
            }

        } catch (err) {
            console.log(err?.message)
            
            console.log(err?.response?.data)
        } finally {
            setloading(false)
        }
    }

    return (
        <>
        <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={parentIsOpen}
        onClose={closeModal}
        motionPreset="slideInTop"
        isCentered={true}
        size={'lg'}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{ type === "login" ? "Silahkan login" : "Silahkan register"} </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={2}>

            {
                type === "login" ? <HStack
                pb={3}
            >
                <Text>Belum punya akun ?</Text>          
                <Text color={'blue.700'} _hover={{
                    cursor: "pointer",
                    textDecoration: "underline"
                }}
                    _active={{
                        cursor: "pointer",
                        textDecoration: "underline" 
                    }}
                    onClick={e => setType("register")}
                >daftar disini</Text>          
            </HStack> : <HStack
                pb={3}
            >
                <Text>Sudah punya akun ?</Text>          
                <Text color={'blue.700'} _hover={{
                    cursor: "pointer",
                    textDecoration: "underline"
                }}
                    _active={{
                        cursor: "pointer",
                        textDecoration: "underline" 
                    }}
                    onClick={e => setType("login")}
                >masuk disini</Text>          
            </HStack>
            }

            {
                type === "register" && 
                <>
                    <FormControl>
                        <FormLabel>
                            <Text
                                fontSize={['sm','md']}
                            >Username</Text>
                        </FormLabel>
                        <Input
                            fontSize={['sm','md']}
                            placeholder="eg: budisetiawan"
                            value={data?.username}
                            onChange={e =>
                            setData({ ...data, username: e.target.value })
                            }
                            onBlur={e => onBlurError(e, "username")}
                        />
                        { errorMsg.username !== "" && <Text fontSize={['sm']} color={'red.500'}>{errorMsg.username}</Text> }
                    </FormControl>
                    <FormControl
                        mt={2}
                    >
                        <FormLabel>
                            <Text
                                fontSize={['sm','md']}
                            >Nama lengkap - <Text as="i" fontSize={['sm']}>Optional</Text>
                            </Text>
                        </FormLabel>
                        <Input
                            fontSize={['sm','md']}
                            placeholder="eg: Budi setiawan"
                            value={data?.full_name}
                            onChange={e =>
                            setData({ ...data, full_name: e.target.value })
                            }
                        />
                    </FormControl>
                    <FormControl
                        mt={2}
                    >
                        <FormLabel>
                            <Text
                                fontSize={['sm','md']}
                            >Nomer Telepon - <Text as="i" fontSize={['sm']}>Optional</Text>
                            </Text>
                        </FormLabel>
                        <Input
                            fontSize={['sm','md']}
                            placeholder="eg: 082123 ..."
                            value={data?.phone_number}
                            onChange={e =>
                            setData({ ...data, phone_number: e.target.value })
                            }
                            onBlur={e => onBlurError(e, "phone_number")}
                        />
                        { errorMsg.phone_number !== "" && <Text fontSize={['sm']} color={'red.500'}>{errorMsg.phone_number}</Text> }
                    </FormControl>
                </>
            }

            <FormControl id={"sender-number"} mt={type === "login" ? 0 : 2} htmlFor="email">
              <FormLabel>
                <Text
                fontSize={['sm','md']}
              >Email</Text>
              </FormLabel>
              <Input
                fontSize={['sm','md']}
                placeholder="eg: user@gmail.com"
                value={data?.email}
                onChange={e =>
                  setData({ ...data, email: e.target.value })
                }
                type={'email'}
                onBlur={e => onBlurError(e, "email")}
              />
              { errorMsg.email !== "" && <Text fontSize={['sm']} color={'red.500'}>{errorMsg.email}</Text> }
            </FormControl>
            <FormControl
                pt={3}
                pb={4}
                mt={2}
            >
                <FormLabel htmlFor="password">Password</FormLabel>
                <InputGroup>
                    <Input 
                        type={isOpen ? "text" : "password"}
                        required
                        autoComplete="current-password"
                        onChange={e => setData({ ...data, password: e.target.value })}
                        value={data?.password}
                        onBlur={e => onBlurError(e, "password")}
                    />
                    
                    <InputRightElement>
                    <IconButton
                            variant={'link'}
                            aria-label={isOpen ? "Mask password" : "Reveal password"}
                            icon={isOpen ? <HiEyeOff/> : <HiEye/>}
                            onClick={onClickReveal}
                            _focus={{
                                border: "none",
                                outline: "none"
                            }}
                            
                    />
                    </InputRightElement>
                </InputGroup>
                { errorMsg.password !== "" && <Text fontSize={['sm']} color={'red.500'}>{errorMsg.password}</Text> }
                { type === "login" && <Text mt={2}
                    color={'blue.700'} 
                    _hover={{
                        cursor: "pointer",
                        textDecoration: "underline"
                    }}
                    _active={{
                        cursor: "pointer",
                        textDecoration: "underline" 
                    }}
                
                align={'right'}>Lupa password ?</Text>}
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={submitData}
              display={'block'}
              width={'100%'}
              colorScheme="teal"
              animation={shaked ? animation : 'none'}
              onAnimationEnd={() => setShaked(false)}
              isLoading={loading}
              disabled={loading}
            >
              { type === "login" ? "Login" : "Register" }
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </>
    )

}
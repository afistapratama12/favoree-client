import { Box, Button, Flex, FormControl, FormLabel, Heading, IconButton, Image, Input, InputGroup, InputRightElement, Stack, Text, useDisclosure } from "@chakra-ui/react"
import axios from "axios"
import { useState } from "react"

import  { useForm } from "react-hook-form"

import { HiEye, HiEyeOff } from "react-icons/hi"
import { useHistory } from "react-router-dom"
import { API } from "../../API/api"
import { base_url } from "../../API/axios"

import favoree_logo from "../../assets/image/logo_favoree.png"
import { path } from "../../routes/route"


export const LoginAdmin = () => {
    const history = useHistory()

    const { register, handleSubmit, formState: { errors }} = useForm();

    const [loading, setLoading] = useState(false)

    const { isOpen, onToggle } = useDisclosure()
  
    const onClickReveal = () => {
      onToggle()
    }

    const onSubmit = async (data) => {
        try {
            setLoading(true)

            const resp = await axios.post(base_url + API.admin.login, data)

            if (resp?.status === 200) {
                localStorage.setItem("admin_access_token", resp?.data?.token)
                localStorage.setItem("admin_email", resp?.data?.email)
                localStorage.setItem("admin_fullname", resp?.data?.full_name)
                localStorage.setItem("admin_username", resp?.data?.username)

                history.push(path.adminOverview)

                setLoading(false)
            } else {
                setLoading(false)
            }
        } catch (error) {
            console.log(error?.message)

            setLoading(false)
        }
    }

    return (
        <>
            <Box>
                <Flex
                    direction={"column"}
                    justifyContent="center"
                    alignItems="center"
                    width="100wh"
                    height="100vh"
                >
                <Stack
                    bg={'white'}
                    minW={{
                        base: "90%",
                        md : "468px"
                    }}
                    px={8}
                    py={8}
                    borderRadius={'15px'}
                    spacing={4}
                    backgroundColor="whiteAlpha.900"
                    boxShadow="md"

                >
                    <Box
                        align={'center'}
                        pb={6}
                    >
                        <Image src={favoree_logo} alt={"favoree-logo"} w={'200px'}/>
                    </Box>

                    <Heading
                        py={4}
                        fontSize={'20px'}
                    >Admin Login</Heading>
                    <form>
                        <Stack>
                        <FormControl>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <Input 
                                type='email'
                                {...register("email", { required: "email harus diisi"})}
                            />
                            { errors.email && <Text color="red.500">{errors.email.message}</Text> }
                        </FormControl>
                        <FormControl
                            pb={4}
                        >
                            <FormLabel htmlFor="password">Password</FormLabel>
                            <InputGroup>
                                <Input 
                                    type={isOpen ? "text" : "password"}
                                    required
                                    autoComplete="current-password"
                                    {...register("password", { required: 'password harus diisi'})}
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
                            { errors.password && <Text color="red.500">{errors.password.message}</Text> }
                        </FormControl>
                        <Button
                            onClick={handleSubmit(onSubmit)}
                            isLoading={loading}
                            disabled={loading}
                        >
                            Login
                        </Button>
                        </Stack>
                    </form>
                </Stack>
                </Flex>
            </Box>
        </>
    )
}
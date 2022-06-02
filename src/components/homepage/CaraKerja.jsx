import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react"
import basecircle from "../../assets/image/basecircle.svg"

import fill_form_sm from "../../assets/image/fill_form_sm.png"
import payment_sm from "../../assets/image/payment_sm.png"
import send_payment_sm from "../../assets/image/send_payment_sm.png"
import relax_sm from "../../assets/image/relax_sm.png"
import done_sm from "../../assets/image/done_sm.png"
import success_sm from "../../assets/image/success_sm.png"

import { headingFontSize } from "../../prop_style"
import { colorPallet } from "../../theme"
import { form_url } from "../../credential"

const itemList = [{
    number: "1",
    name: 'Mengisi form disini',
    imageSrc: fill_form_sm,
    alt: 'fill-form'
},{
    number: "2",
    name: 'Lakukan Pembayaran',
    imageSrc: payment_sm,
    alt: 'payment'
},{
    number: "3",
    name: 'Upload Bukti Pembayaran',
    imageSrc: send_payment_sm,
    alt: 'upload-payment'
},{
    number: "4",
    name: 'Menunggu Proses',
    imageSrc: relax_sm,
    alt: 'relax'
},{
    number: "5",
    name: 'Uang diterima dan menerima pesan konfirmasi',
    imageSrc: success_sm,
    alt: 'success'
},{
    number: "6",
    name: 'Selesai',
    imageSrc: done_sm,
    alt: 'done'
}]


export const positionImage = (number) => {
    switch (number) {
        case "1":
            return {
                base: '-60px',
                sm : "-60px",
                md : "-120px",
                xl : "-120px"
            }
        case "2":
            return {
                base: '-60px',
                sm : "-60px",
                md : "-130px",
                xl : "-130px"
            }
        case "3":
            return {
                base: '-60px',
                sm : "-60px",
                md : "-160px",
                xl : "-160px"
            }
        case "4":
            return {
                base: '-60px',
                sm : "-60px",
                md : "-120px",
                xl : "-120px"
            }
        case "5":
            return {
                base: '-80px',
                sm : "-80px",
                md : "-150px",
                xl : "-150px"
            }
        case "6":
            return {
                base: '-80px',
                sm : "-80px",
                md : "-170px",
                xl : "-170px"
            }
        default:
            return "0px"
    }
}

export const textMarginTop = (number) => {
    switch (number) {
        case "1":
            return {
                base: '30px',
                sm: '30px',
                md: '20px',
                xl: '20px'
            }
        case "2":
            return {
                base: '32px',
                sm: '32px',
                md: '14px',
                xl: '14px'
            }
        case "3":
            return "17px"
        case "4":
            return {
                base: '40px',
                sm: '40px',
                md: '17px',
                xl: '17px'
            }
        case "5":
            return "48px"
        case "6":
            return {
                base: '70px',
                sm: '70px',
                md: '27px',
                xl: '27px'
            }
        default:
            return "0px"
    }
}

export const widthImage = (number) => {
    switch (number) {
        case "1":
            return {
                base : "120px",
                sm: "120px",
                md: 'auto',
                xl : 'auto'
            }
        case "2":
            return {
                base : "100px",
                sm: "100px",
                md: 'auto',
                xl : 'auto'
            }
        case "3":
            return {
                base : "90px",
                sm: "90px",
                md: 'auto',
                xl : 'auto'
            }
        case "4":
            return {
                base : "100px",
                sm: "100px",
                md: 'auto',
                xl : 'auto'
            }
        case "5":
            return {
                base : "80px",
                sm: "80px",
                md: 'auto',
                xl : 'auto'
            }
        case "6":
            return {
                base : "100px",
                sm: "100px",
                md: 'auto',
                xl : 'auto'
            }
        default:
            return '0px'
    }


}

export const CaraKerjaItem = (props) => {
    const { number, name, imageSrc, altImage } = props

    // const redirectToFormURL = (e) => {
    //     e.preventDefault()

    //     window.open(form_url, "_blank")
    // }

    return (
        <Box
            maxW={{
                base: '140px',
                sm: '140px',
                md: '200px',
                xl: '400px'
            }}
            minWidth={'1xl'}
            mb={10}
            mx={{
                base: 2,
                sm: 2,
                md: 10,
                xl :10
            }}
        >
            <Box>
                <Image src={basecircle} boxSize={{
                    base: "80px",
                    sm: "80px",
                    md: '150px'
                }}
                    alt={'workflow-circle'}
                />
                <Image src={imageSrc} mt={positionImage(number)}
                    width={widthImage(number)}
                    alt={altImage}
                />
            </Box>
            <Flex
                mt={textMarginTop(number)}
                alignItems={'center'}
                minW={'140px'}
            >
                <Box
                    bg={colorPallet.blue_four}
                    borderRadius={'100px'}
                    minW={{
                        base: '28px',
                        sm: '28px',
                        md: '35px',
                        xl :'35px'
                    }}
                    minH={{
                        base: '28px',
                        sm: '28px',
                        md: '35px',
                        xl :'35px'
                    }}
                >
                    <Text
                        fontSize={{
                            base: '13px',
                            sm: '14px',
                            md: '16px'
                        }}
                        pt={1}
                        color={'gray.100'}
                    >{number}</Text>
                </Box>
                {
                    number === "1" ? (
                        <Text 
                            fontSize={{
                                base: '13px',
                                sm: '15px',
                                md: '16px'
                            }}
                            maxW={'240px'} 
                            pl={4}
                        >Mengisi form <Link href={form_url} color={colorPallet.blue_four}>disini</Link> </Text>
                    ) : (
                        <Text 
                            ml={number === "6" ? "25px" : "auto"}
                            fontSize={{
                                base: "13px",
                                sm: '15px',
                                md: '16px'
                            }}
                            maxW={'240px'} pl={4}
                            >{name}</Text>
                    )
                }
            </Flex>
        </Box>
    )

}

const CaraKerja = () => {
    return (
        <>
        <Box
            id="cara_kerja"
            align={'center'}
            mt={'100px'}
        > 
            <Heading
                mb={{
                    base:16,
                    sm: 16,
                    md:24
                }}
                fontSize={headingFontSize}
            >Cara Kerja</Heading>

            <Flex
                mt={10}
                justifyContent={'space-around'}
                flexFlow={'row wrap'}
                rowGap={'5px'}
            >

                {
                    itemList && itemList.map((item, idx) => (
                        <CaraKerjaItem
                            key={idx}
                            number={item.number}
                            name={item.name}
                            imageSrc={item.imageSrc}
                            altImage={item.alt}
                        />
                    ))
                }
            </Flex>
            <Flex>

            </Flex>

        </Box>
        </>
    )

}

export { CaraKerja }
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"
import basecircle from "../../assets/image/basecircle.svg"

import fill_form_sm from "../../assets/image/fill_form_sm.png"
import payment_sm from "../../assets/image/payment_sm.png"
import send_payment_sm from "../../assets/image/send_payment_sm.png"
import relax_sm from "../../assets/image/relax_sm.png"
import done_sm from "../../assets/image/done_sm.png"
import success_sm from "../../assets/image/success_sm.png"

import { headingFontSize } from "../../prop_style"
import { colorPallet } from "../../theme"

const itemList = [{
    number: "1",
    name: 'Mengisi form disini',
    imageSrc: fill_form_sm
},{
    number: "2",
    name: 'Lakukan Pembayaran',
    imageSrc: payment_sm
},{
    number: "3",
    name: 'Upload Bukti Pembayaran',
    imageSrc: send_payment_sm
},{
    number: "4",
    name: 'Menunggu Proses',
    imageSrc: relax_sm
},{
    number: "5",
    name: 'Uang diterima dan menerima pesan konfirmasi',
    imageSrc: success_sm
},{
    number: "6",
    name: 'Selesai',
    imageSrc: done_sm
}]




export const positionImage = (number) => {
    switch (number) {
        case "1":
            return "-120px"
        case "2":
            return "-130px"
        case "3":
            return "-160px"
        case "4":
            return "-120px"
        case "5":
            return "-150px"
        case "6":
            return "-170px"
        default:
            return "0px"
    }
}

export const textMarginTop = (number) => {
    switch (number) {
        case "1":
            return "20px"
        case "2":
            return "14px"
        case "3":
            return "17px"
        case "4":
            return "17px"
        case "5":
            return "25px"
        case "6":
            return "27px"
        default:
            return "0px"
    }
}

export const CaraKerjaItem = (props) => {
    const { number, name, imageSrc } = props

    return (
        <Box
            minWidth={'1xl'}
            mb={10}
            mx={10}
        >
            <Box>
                <Image src={basecircle} boxSize={'150px'}/>
                <Image src={imageSrc} mt={positionImage(number)}/>
            </Box>
            <Flex
                mt={textMarginTop(number)}
                alignItems={'center'}
            >
                <Box
                    bg={colorPallet.blue_four}
                    borderRadius={'100px'}
                    minW={'35px'}
                    minH={'35px'}
                >
                    <Text
                        pt={1}
                        color={'gray.100'}
                    >{number}</Text>
                </Box>
                <Text maxW={'240px'} pl={4}>{name}</Text>
            </Flex>
        </Box>
    )

}

const CaraKerja = () => {
    return (
        <>
        <Box
            align={'center'}
            mt={24}
        > 
            <Heading
                mb={14}
                fontSize={headingFontSize}
            >Cara Kerja</Heading>

            <Flex
                mt={10}
                justifyContent={'space-around'}
                flexWrap={'wrap'}
            >
                {
                    itemList && itemList.map((item, idx) => (
                        <CaraKerjaItem
                            key={idx}
                            number={item.number}
                            name={item.name}
                            imageSrc={item.imageSrc}
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
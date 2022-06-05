import { Box, Heading, HStack, Image, Text, Flex } from "@chakra-ui/react"

import faq from "../../assets/image/redesign/faq.svg"
import { colorPallet } from "../../theme"

import dropdown from '../../assets/image/redesign/dropdown.svg'
import dropWhite from '../../assets/image/redesign/drop_white.svg'

import { useState } from "react"
import { color_base } from "../Navbar"
import { section_heading } from "../../responsive"

const questionItems = [{
    question : "Bagaimana cara transaksi dengan Favoree ?",
    answer: 'Cukup klik tombol "Mulai Convert" di halaman beranda, lalu masukkan nomor e-wallet kamu, masukkan nomor e-wallet tujuan dan bukti pengiriman pada nomor e-wallet Favoree. Jika sudah, klik tombol kirim dan kamu akan menerima konfirmasi transaksi melalui WhatsApp!'
},{
    question : "Berapa biaya admin untuk transaksi e-wallet ?",
    answer: 'Favoree menawarkan biaya transaksi convert e-wallet yang terjangkau. Kamu cukup membayar Rp. 1000 untuk setiap transaksi dengan pengajuan maksimal Rp 500.000. Jika kamu memiliki transaksi yang lebih besar diatas Rp. 500.000, maka akan dipotong biaya admin Rp. 2.000. Dan khusus untuk pembayaran menggunakan QRIS akan dikenakan biaya admin Rp 2.000 setiap transaksi.'
},{
    question : "Apakah transaksi dengan Favoree aman ?",
    answer: 'Favoree menerapkan keamanan ganda pada data pribadi seluruh pengguna Favoree dan menjamin keamanan semua proses transaksi yang terjadi di Favoree dengan jaminan uang kembali.'
},{
    question : "Apa saja yang dapat dilayani oleh Favoree ?",
    answer: 'Dengan Favoree, kamu dapat melakukan convert e-wallet ke e-wallet tujuan yang berbeda dengan e-wallet yang kamu gunakan dengan biaya terjangkau. Favoree dapat melakukan transaksi pada beberapa e-wallet di Indonesia yaitu GOPAY, OVO, DANA dan SHOPEEPAY.'
}, {
    question : 'Berapa lama saya akan menerima saldo e-wallet saya ?',
    answer : 'Proses transaksi di Favoree membutuhkan waktu 1-2 jam saja. Kamu akan mendapatkan pesan konfirmasi melalui Whatsapp terkait dengan transaksi kamu. Jadi pastikan menyertakan nomor yang tersambung dengan aplikasi WhatsApp.'
}]

export const FAQItem = ({ question, answer, ...props }) => {
    const [isOpen, setIsOpen] = useState(false)

    const [image, setImage] = useState(dropdown)

    return (
        <Box
            mt={8}
        >
            <Box
                position={'relative'}
                zIndex={'0'}
                cursor={'pointer'}
                bg={isOpen ? color_base.greenblue : colorPallet.blue_one}
                minW={{
                    xl : '820px',
                    md: '60vw',
                    sm: "92vw",
                    base: "92vw"
                }}
                maxW={{
                    xl: '820px',
                    md: '60vw',
                    sm: "92vw",
                    base: "92vw" 
                }}
                minH={'60px'}
                borderRadius={'20px'}
                onClick={() => setIsOpen(!isOpen)}
                _hover={{
                    bg: color_base.greenblue
                }}

                onMouseEnter={() => setImage(dropWhite)}
                onMouseLeave={() => setImage(dropdown)}
            >
                <Flex
                    justifyContent={'space-between'}
                    p={4}
                    px={6}
                    alignItems={'center'}
                    color={isOpen ? color_base.white : 'black'}
                    _hover={{
                        color: color_base.white
                    }}
                >
                    <Text
                        fontSize={{
                            xl: '16px',
                            md: '16px',
                            sm: '14px',
                            base: '13px',
                        }}
                    >{question}</Text>
                    <Image 
                        src={isOpen ? dropWhite : image} 
                        boxSize={'20px'}
                        transform={isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}
                        alt={'dropdown-button'}
                    />
                </Flex>
            </Box>
            <Box
                display={isOpen ? 'block' : 'none'}
                mt={'-35px'}
                pt={12}
                pb={4}
                px={6}
                bg={colorPallet.blue_one}
                borderRadius={'20px'}
                maxW={{
                    xl: '820px',
                    md: '60vw',
                    sm: "92vw",
                    base: "92vw" 
                }}
                fontSize={{
                    xl: '16px',
                    md: '16px',
                    sm: '14px',
                    base: '13px',
                }}
                lineHeight={'26px'}
            >
                {answer}
            </Box>
        </Box>
    )
}


export const FAQ = () => {
    return (
        <Box
            id={'faq'}
            maxW={{
                xl: '6.5xl',
                md: '85vw',
                sm: "92vw",
                base: '92vw'
            }}
            margin={'auto'}
        > 
            <Box
                my={{
                    xl: 24,
                    md: 24,
                    sm: 16,
                    base: 16
                }}
            >
                <Heading
                    fontSize={section_heading}
                >Pertanyaan Seputar Favoree.id</Heading>

                <HStack
                    mt={{
                        base: 3,
                        sm: 3,
                        md: 10,
                        xl: 10
                    }}
                    align={'top'}
                >
                    <Box>
                        {
                            questionItems.map((item, index) => {
                                return (
                                    <FAQItem
                                        key={index}
                                        question={item.question}
                                        answer={item.answer}
                                    />
                                )
                            })
                        }
                    </Box>

                    <Box>
                        <Image
                            alt={'faq'}
                            src={faq}
                        />
                    </Box>
                </HStack>
            </Box>
        </Box>
    )
}
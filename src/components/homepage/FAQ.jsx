import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"

import { headingFontSize } from "../../prop_style"
import basecircle from "../../assets/image/basecircle.svg"
import dropdown from "../../assets/vector/dropdown.svg"

import faq from "../../assets/image/faq_md.png"
import { colorPallet } from "../../theme"
import { useState } from "react"

const questionItems = [{
    question : "Bagaimana cara transaksi dengan Favoree ?",
    answer: 'Cukup klik tombol "Ajukan Convert" di halaman beranda, lalu masukkan nomor e-wallet kamu, masukkan nomor e-wallet tujuan dan bukti pengiriman pada nomor e-wallet Favoree. Jika sudah, klik tombol kirim dan kamu akan menerima konfirmasi transaksi melalui WhatsApp!'
},{
    question : "Berapa biaya admin untuk transaksi e-wallet ?",
    answer: 'Favoree menawarkan biaya transaksi convert e-wallet yang terjangkau. Kamu cukup membayar Rp. 1000 untuk setiap transaksi yang kamu ajukan.'
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

export const FAQItem = (props) => {
    const { question, answer } = props

    const [isOpen, setIsOpen] = useState(false)

    return (
        <Box
            mt={8}
        >
            <Box
                position={'relative'}
                zIndex={'5'}
                cursor={'pointer'}
                bg={isOpen ? colorPallet.blue_two : colorPallet.blue_one}
                minW={{
                    md: '60vw',
                    sm: "92vw",
                    base: "92vw"
                }}
                maxW={{
                    md: '60vw',
                    sm: "92vw",
                    base: "92vw" 
                }}
                minH={'60px'}
                borderRadius={'20px'}
                onClick={() => setIsOpen(!isOpen)}
                _hover={{
                    bg: colorPallet.blue_two
                }}
            >
                <Flex
                    justifyContent={'space-between'}
                    p={4}
                    px={6}
                    alignItems={'center'}
                >
                    <Text>{question}</Text>
                    <Image 
                        src={dropdown} 
                        boxSize={'20px'}
                        transform={isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}
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
                    md: '60vw',
                    sm: "92vw",
                    base: "92vw" 
                }}
                fontSize={{
                    base: '15px',
                }}
            >
                {answer}
            </Box>
        </Box>
    )
}

const FAQ = () => {
    return (
        <>
            <Box
                id="faq"
                class="faq"
                mt={'140px'}
                mb={'90px'}
            >
                <Box
                    mb={4}
                >
                    <Heading
                        fontSize={headingFontSize}
                    >Frequently Asked Questions</Heading>
                </Box>

                <Flex>
                    <Box>
                        { 
                            questionItems.map((item, idx) => (
                                <FAQItem 
                                    key={idx}
                                    question={item.question}
                                    answer={item.answer}
                                />
                            ))
                        }

                    </Box>

                    <Box
                        display={{
                            base: "none",
                            sm: "none",
                            md: "block",
                            xl: "block"
                        }}
                        align={'center'}
                        mt={24}
                    >
                        <Image src={basecircle} boxSize={{
                            base: '200px',
                            md: '300px',
                            xl: '350px'
                        }}/>

                        <Image src={faq} mt={'-450px'}/>
                    </Box>
                </Flex>

            </Box>
        </>
    )
}

export { FAQ }
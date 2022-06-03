import { Box, Heading, HStack, Image, Link, Text, VStack } from "@chakra-ui/react"


import ck1 from "../../assets/image/redesign/cara_kerja_1.svg"
import ck2 from "../../assets/image/redesign/cara_kerja_2.svg"
import ck3 from "../../assets/image/redesign/cara_kerja_3.svg"
import ck4 from "../../assets/image/redesign/cara_kerja_4.svg"
import ck5 from "../../assets/image/redesign/cara_kerja_5.svg"
import ck6 from "../../assets/image/redesign/cara_kerja_6.svg"
import { form_url } from "../../credential"
import { section_heading, text_description } from "../../responsive"
import { color_base } from "./Navbar"

const itemList = [{
    number: "1",
    name: 'Mengisi form disini',
    imageSrc: ck1,
    alt: 'fill-form'
},{
    number: "2",
    name: 'Lakukan Pembayaran',
    imageSrc: ck2,
    alt: 'payment'
},{
    number: "3",
    name: 'Upload Bukti Pembayaran',
    imageSrc: ck3,
    alt: 'upload-payment'
},{
    number: "4",
    name: 'Menunggu Proses',
    imageSrc: ck4,
    alt: 'relax'
},{
    number: "5",
    name: 'Uang diterima dan menerima pesan konfirmasi',
    imageSrc: ck5,
    alt: 'success'
},{
    number: "6",
    name: 'Selesai',
    imageSrc: ck6,
    alt: 'done'
}]


const marginTextResponsive = (numb) => {
    switch (numb) {
        case '1':            
            return {
                xl: '8vh',
                md: '8vh',
                sm: '2vh',
                base: '2vh'
            }
        case '2':            
            return {
                xl: '6vh',
                md: '6vh',
                sm: '2vh',
                base: '2vh'
            }
        case '3':            
            return {
                xl: '3vh',
                md: '3vh',
                sm: '2vh',
                base: '2vh'
            }
        case '4':            
            return {
                xl: '6vh',
                md: '6vh',
                sm: '5vh',
                base: '3vh'
            }
        case '5':            
            return {
                xl: '3vh',
                md: '3vh',
                sm: '1vh',
                base: '1vh'
            }
        case '6':            
            return {
                xl: '3vh',
                md: '3vh',
                sm: '3vh',
                base: '5vh'
            }
        default:
            break;
    }
} 

const imageResize = (numb) => {
    switch (numb) {
        case "1":
            return {
                base: '45vh',
                sm: '32vh',
                md: 'auto',
                xl:'auto'
            }
        case "2":
            return {
                base: '20vh',
                sm: '26vh',
                md: 'auto',
                xl:'auto'
            }
        case "3":
            return {
                base: '19vh',
                sm: '25vh',
                md: 'auto',
                xl:'auto'
            }
        case "4":
            return {
                base: '24vh',
                sm: '29vh',
                md: 'auto',
                xl:'auto'
            }
        case "5":
            return {
                base: '18vh',
                sm: '24vh',
                md: 'auto',
                xl:'auto'
            }
        case "6":
            return {
                base: '21vh',
                sm: '27vh',
                md: 'auto',
                xl:'auto'
            }
        default:
            break;
    }
}

export const CaraKerjaItem = ({ idx, numb, name, imageSrc, alt}) => {
    return (
        <VStack key={idx} w={{
            base: '45%',
            sm: '45%',
            md: '20%',
            xl: '20%'
        }}
            pb={{
                base: 6,
                sm: 6,
                md:10,
                xl:10
            }}
        >
                    <Image
                    w={imageResize(numb)}
                    alt={alt}
                    src={imageSrc}
                />
            <HStack
                w={{
                    base: '100%',
                    sm: '100%',
                    md:'20vw',
                    xl: '20vw'
                }}
                align={'center'}
                pt={marginTextResponsive(numb)}
            >
                    <Box
                        align={'center'}
                        alignItems={'center'}
                        bgColor={color_base.greenblue}
                        mr={{
                            xl:3,
                            md: 3,
                            sm:2,
                            base:0
                        }}
                        minW={{
                            xl :'6vh',
                            md: '6vh',
                            sm: '4vh',
                            base: '4vh'
                        }}
                        h={{
                            xl :'6vh',
                            md: '6vh',
                            sm: '4vh',
                            base: '4vh'
                        }}
                        rounded={'full'}
                        color={color_base.white}
                    >
                        <Text 
                            pt={{
                                base: 0,
                                sm: 0,
                                md :2,
                                xl :2
                            }}
                            fontSize={{
                                xl: '1.2rem',
                                md: '1.2rem',
                                sm: '1.2rem',
                                base: '1rem'
                            }}
                        >{numb}</Text>


                    </Box>
                    <Box w={'75%'}>
                        {
                            numb === '1' ? (
                                <Text
                                    fontSize={text_description}
                                >Mengisi form <Link href={form_url} color={color_base.greenblue}>disini</Link> </Text>
                            ) : (
                                <Text
                                    fontSize={text_description}
                                >{name}</Text>
                            )
                        }
                    </Box>
            </HStack>
        </VStack>
    )
}


export const CaraKerja = () => {
    return (
        <Box
            maxW={{
                base: '90vw',
                sm: '90vw',
                md: '85vw',
                xl: '85vw'
            }}
            margin={'auto'}
            id={'cara-kerja'}
        >
            <Box
                mt={'15vh'}
                align={'center'}
            >
                <Heading
                    fontSize={section_heading}
                >Cara Kerja</Heading>
            </Box>

            <HStack
                my={'10vh'}
                wrap={'wrap'}
                justifyContent={'space-around'}
                align={'top'}
            >
                {
                    itemList.map((item, idx) => {
                        return (
                            <CaraKerjaItem
                                idx={idx}
                                numb={item.number}
                                name={item.name}
                                imageSrc={item.imageSrc}
                                alt={item.alt}
                            />
                        )
                    })
                }
            </HStack>
        </Box>
    )
}
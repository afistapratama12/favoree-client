import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Image,
  Input,
  keyframes,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  usePrefersReducedMotion,
} from '@chakra-ui/react';

import { useState } from 'react';
import { useRef } from 'react';
import { plainData } from '../pages/Home';

import warning from "../assets/image/warning.svg"

function isNumber(str) {
  if (str.trim() === '') {
    return false;
  }

  return !isNaN(str);
}

export const shake = keyframes`
  10%, 90% {transform: translate3d(-1px, 0, 0);}
  20%, 80% {transform: translate3d(2px, 0, 0);}
  30%, 50%, 70% {transform: translate3d(-4px, 0, 0);}
  40%, 60% {transform: translate3d(4px, 0, 0);}
`;

export const ModalTransfer = ({ isOpen, onClose, data, setData }) => {
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const preferReducedMotion = usePrefersReducedMotion();

  const animation = preferReducedMotion ? undefined : `${shake} 0.5s ease 1`;

  const [shaked, setShaked] = useState(false);

  const [errorMsg, setErrorMsg] = useState(null)

  const processTransfer = e => {
    e.preventDefault();
    let error = ""

    if (
      !data.sender_number || 
      !data.sender_wallet ||
      !data.receiver_name ||
      !data.receiver_number ||
      !data.receiver_wallet ||
      !data.amount_transfer  
      ) {
        error = "Pastikan semua data terisi"
    } else if (data.sender_number.length < 8) {
        error = "Nomor pengirim minimal 8 angka"
    } else if (!isNumber(data.sender_number)) {
        error = "Nomor pengirim harus berupa angka"
    } else if (data.receiver_number.length < 8) {
        error = "Nomor penerima minimal 8 angka"
    } else if (!isNumber(data.receiver_number)) {
        error = "Nomor penerima harus berupa angka"
    } else if (!isNumber(data.amount_transfer)) {
        error = "Jumlah transfer harus berupa angka"
    } else if (+data.amount_transfer < 1000) {
        error = "Jumlah transfer minimal 1000"
    }

    if (!!error) {
      setShaked(true)
      setErrorMsg(error)
      return
    } else {
      setShaked(false)
      onClose();
      setErrorMsg(null)
      setData(plainData);
      console.log(data);
    }
  };

  const closeModal = () => {
    onClose();
    setErrorMsg(null);

    setShaked(false)
  };

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={closeModal}
        motionPreset="slideInBottom"
        isCentered={true}
        size={'lg'}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Mohon isi form</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={4}>
            {
              errorMsg && (
                <Box py={1} mb={2} borderRadius={'10px'} display={'flex'}>
                <Image
                  src={warning}
                  w={'15px'}
                  mr={2}
                  color={'red'}
                />
                <Text
                  color={'red'}
                >
                  {errorMsg}
                </Text>
              </Box>

              )
            }
          
            <FormControl id={"sender-number"}>
              <FormLabel>
                <Text
                fontSize={['sm','md']}
              >Nomer Pengirim</Text>
              </FormLabel>
              <Input
                fontSize={['sm','md']}
                ref={initialRef}
                placeholder="eg: 085736653576"
                value={data.sender_number}
                onChange={e =>
                  setData({ ...data, sender_number: e.target.value })
                }
                // onFocus={onFocusSenderNumber}
                //onBlur={onBlurSenderNumber}
              />
            </FormControl>
            <FormControl mt={3} id={"sender-wallet"}>
              <FormLabel>E-wallet Pengirim</FormLabel>
              <Select
                fontSize={['sm','md']}
                placeholder="pilih e-wallet"
                value={data.sender_wallet}
                onChange={e =>
                  setData({ ...data, sender_wallet: e.target.value })
                }
                //onBlur={onBlurSenderWallet}
              >
                <option value="dana">Dana</option>
                <option value="ovo">OVO</option>
                <option value="shopeepay">Shopeepay</option>
                <option value="gopay">Gopay</option>
              </Select>
            </FormControl>
            <FormControl mt={3} id={"receiver-name"}>
              <FormLabel>Nama Penerima</FormLabel>
              <Input
                fontSize={['sm','md']}
                placeholder="eg: Kim Tae Hyun"
                value={data.receiver_name}
                onChange={e =>
                  setData({ ...data, receiver_name: e.target.value })
                }
                //onBlur={onBlurReceiverName}
              />
            </FormControl>
            <FormControl mt={3} id={"sender-number"}>
              <FormLabel>Nomer Penerima</FormLabel>
              <Input
                fontSize={['sm','md']}
                placeholder="eg: 085736653576"
                value={data.receiver_number}
                onChange={e =>
                  setData({ ...data, receiver_number: e.target.value })
                }
                // onFocus={onFocusReceiverNumber}
                //onBlur={onBlurReceiverNumber}
              />
            </FormControl>
            <FormControl mt={3} id={"sender-wallet"}>
              <FormLabel>E-wallet Penerima</FormLabel>
              <Select
                fontSize={['sm','md']}
                placeholder="pilih e-wallet"
                value={data.receiver_wallet}
                onChange={e =>
                  setData({ ...data, receiver_wallet: e.target.value })
                }
                //onBlur={onBlurReceiverWallet}
              >
                <option value="dana">Dana</option>
                <option value="ovo">OVO</option>
                <option value="shopeepay">Shopeepay</option>
                <option value="gopay">Gopay</option>
              </Select>
            </FormControl>
            <FormControl mt={3} id={"amount"}>
              <FormLabel>
                Jumlah Transfer
              </FormLabel>
              <Input
                fontSize={['sm','md']}
                placeholder="eg: 100000"
                value={data.amount_transfer}
                onChange={e =>
                  setData({ ...data, amount_transfer: e.target.value })
                }
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={processTransfer}
              display={'block'}
              width={'100%'}
              colorScheme="teal"
              animation={shaked ? animation : 'none'}
              onAnimationEnd={() => setShaked(false)}
            >
              Transfer
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

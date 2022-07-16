import {
  Button,
  FormControl,
  FormLabel,
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
import axios from 'axios';

import { useState } from 'react';
import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { API } from '../../API/api';
import { base_url } from '../../API/axios';
import { plainData } from '../../pages/Home';
import { path } from '../../routes/route';

// export const plainData = {
//   sender_number: "",
//   sender_wallet: "",
//   receiver_name: "",
//   receiver_number: "",
//   receiver_wallet: "",
//   amount_transfer: ""
// }

export const isNumber = (str) => {
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

// BUG: tidak bisa pakai react hook form
export const ModalTransfer = ({ isOpen, onClose, data, setData }) => {
  const history = useHistory()

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const preferReducedMotion = usePrefersReducedMotion();

  const animation = preferReducedMotion ? undefined : `${shake} 0.5s ease 1`;

  const [shaked, setShaked] = useState(false);

  const [loadingProcess, setLoadingProcess] = useState(false)

  const [errSenderNumber, setErrSenderNumber] = useState(null);
  const [errSenderWallet, setErrSenderWallet] = useState(null);
  const [errReceiverName, setErrReceiverName] = useState(null);
  const [errReceiverNumber, setErrReceiverNumber] = useState(null);
  const [errReceiverWallet, setErrReceiverWallet] = useState(null);
  const [errAmount, setErrAmount] = useState(null);

  const clearError = () => {
    setErrSenderNumber(null)
    setErrSenderWallet(null)
    setErrReceiverName(null)
    setErrReceiverNumber(null)
    setErrReceiverWallet(null)
    setErrAmount(null)
  }

  const processTransfer = async () => {
    if (errSenderNumber ||
      errSenderWallet || 
      errReceiverName || 
      errReceiverNumber || 
      errReceiverWallet || 
      errAmount) 
    {
      setShaked(true)
      return
    }

    setLoadingProcess(true)

    try {
      const resp = await axios({
        method: "POST",
        url : base_url + API.transactions.create,
        data: { ...data, amount_transfer : +data.amount_transfer},
        headers: {
          Authorization: localStorage.getItem("user_access_token")
        }
      })

      if (resp?.status === 201) {
        history.push(path.transactions)
        setLoadingProcess(false)

        history.push(path.processTransaction)
      }

      onClose()
    
      setData(plainData)
      clearError()
    } catch (err) {
      console.log(err?.message)
      console.log(err?.response?.data)
    } finally {
      setLoadingProcess(false)
    }
  }

  const closeModal = () => {
    onClose();

    setShaked(false)
    clearError()
  };

  const onBlurField = (e, fieldName) => {
    e.preventDefault()

    switch (fieldName) {
      case "sender_number":        
        if (data.sender_number === "" || data.sender_number.length === 0) {
          setErrSenderNumber("Nomor pengirim harus diisi")
        } else if (!isNumber(data.sender_number)) {
          setErrSenderNumber("Mohon masukkan angka yang benar")
        } else if (data.sender_number.length < 8) {
          setErrSenderNumber("Nomer minimal 8 angka")
        } else {
          setErrSenderNumber(null)
        }
        return 
      case "sender_wallet":
        if (data.sender_wallet === "" || data.sender_wallet.length === 0) {
          setErrSenderWallet("Wallet pengirim harus diisi")
        } else {
          setErrSenderWallet(null)
        }
        return 
      case "receiver_name":
        if (data.receiver_name === "" || data.receiver_name.length === 0) {
          setErrReceiverName("Nama penerima wajib diisi")
        } else {
          setErrReceiverName(null)
        }
        return 
      case "receiver_number":
        if (data.receiver_number === "" || data.receiver_number.length === 0) {
          setErrReceiverNumber("Nomor tujuan harus diisi")
        }  else if (!isNumber(data.receiver_number)) {
          setErrReceiverNumber("Mohon masukkan angka yang benar")
        } else if (data.receiver_number.length < 8) {
          setErrReceiverNumber("Nomer minimal 8 angka")
        } else {
          setErrReceiverNumber(null)
        }
        return 
      case "receiver_wallet":
        if (data.receiver_wallet === "" || data.receiver_wallet.length === 0) {
          setErrReceiverWallet("Wallet tujuan harus diisi")
        } else {
          setErrReceiverWallet(null)
        }
        return 
      case "amount":
        if (data.amount_transfer === "" || data.amount_transfer.length === 0) {
          setErrAmount("Mohon masukkan jumlah transfer")
        } else if (!isNumber(data.amount_transfer)) {
          setErrAmount("Mohon masukkan angka yang benar")
        } else if (+data.amount_transfer < 2_000 ) {
          setErrAmount("Minimal Transfer 2000 rupiah")
        } else {
          setErrAmount(null)
        }
        return 
      default:
        return
    }
  }

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
          <ModalBody pb={3}>          
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
                value={data?.sender_number}
                onChange={e =>
                  setData({ ...data, sender_number: e.target.value })
                }
                onBlur={e => onBlurField(e, "sender_number")}
              />
              { errSenderNumber && <Text fontSize={['sm']} color="red.500">{errSenderNumber}</Text> }
            </FormControl>
            <FormControl mt={2} id={"sender-wallet"}>
              <FormLabel>E-wallet Pengirim</FormLabel>
              <Select
                fontSize={['sm','md']}
                placeholder="pilih e-wallet"
                value={data?.sender_wallet}
                onChange={e =>
                  setData({ ...data, sender_wallet: e.target.value })
                }
                onBlur={e => onBlurField(e, "sender_wallet")}
              >
                <option value="dana">Dana</option>
                <option value="ovo">OVO</option>
                <option value="shopeepay">Shopeepay</option>
                <option value="gopay">Gopay</option>
              </Select>
              { errSenderWallet && <Text fontSize={['sm']} color="red.500">{errSenderWallet}</Text> }
            </FormControl>
            <FormControl mt={2} id={"receiver-name"}>
              <FormLabel>Nama Penerima</FormLabel>
              <Input
                fontSize={['sm','md']}
                placeholder="eg: Kim Tae Hyun"
                value={data?.receiver_name}
                onChange={e =>
                  setData({ ...data, receiver_name: e.target.value })
                }
                onBlur={e => onBlurField(e, "receiver_name")}
              />
              { errReceiverName && <Text fontSize={['sm']} color="red.500">{errReceiverName}</Text> }
            </FormControl>
            <FormControl mt={2} id={"sender-number"}>
              <FormLabel>Nomer Penerima</FormLabel>
              <Input
                fontSize={['sm','md']}
                placeholder="eg: 085736653576"
                value={data?.receiver_number}
                onChange={e =>
                  setData({ ...data, receiver_number: e.target.value })
                }
                onBlur={e => onBlurField(e, "receiver_number")}
              />
              { errReceiverNumber && <Text fontSize={['sm']} color="red.500">{errReceiverNumber}</Text> }
            </FormControl>
            <FormControl mt={2} id={"sender-wallet"}>
              <FormLabel>E-wallet Penerima</FormLabel>
              <Select
                fontSize={['sm','md']}
                placeholder="pilih e-wallet"
                value={data?.receiver_wallet}
                onChange={e =>
                  setData({ ...data, receiver_wallet: e.target.value })
                }
                onBlur={e => onBlurField(e, "receiver_wallet")}
              >
                <option value="dana">Dana</option>
                <option value="ovo">OVO</option>
                <option value="shopeepay">Shopeepay</option>
                <option value="gopay">Gopay</option>
              </Select>
              { errReceiverWallet && <Text fontSize={['sm']} color="red.500">{errReceiverWallet}</Text> }
            </FormControl>
            <FormControl mt={2} id={"amount"}>
              <FormLabel>
                Jumlah Transfer
              </FormLabel>
              <Input
                fontSize={['sm','md']}
                placeholder="eg: 100000"
                value={data?.amount_transfer}
                onChange={e =>
                  setData({ ...data, amount_transfer: e.target.value })
                }
                onBlur={e => onBlurField(e, "amount")}
              />
              { errAmount && <Text fontSize={['sm']} color="red.500">{errAmount}</Text> }
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
              isLoading={loadingProcess}
              disabled={loadingProcess}
            >
              Transfer
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

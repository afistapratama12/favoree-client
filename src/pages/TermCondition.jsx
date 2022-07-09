import { Box, Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/footer';
import { phone_number } from '../credential';
import { colorPallet } from '../theme';

export const fontSizeTNC = {
    base: '14px',
    sm: '15px',
    md : '16px',
    xl : '16px'
};

export const CHeading = props => {
  //custom heading
  const { data } = props;

  return (
    <Heading fontSize={{
        base: '20px',
        sm: '22px',
        md: '24px',
        xl: '24px'
    }} mt={{
        base: 6,
        sm: 6,
        md: 8,
        xl: 8
    }} mb={{
        base: 2,
        sm: 2,
        md: 4,
        xl: 4
    }}>
      {data}
    </Heading>
  );
};

const TermCondition = () => {
    const sendEmail = (e) => {
        e.preventDefault()

        window.open('mailto:favoree.id@gmail.com?subject=Laporan Kendala&body=Kendala apa yang ingin anda laporkan?', '_blank');
    }

    const sendMessage = (e) => {
        e.preventDefault()

        window.open("https://wa.me/" + phone_number, '_blank');
    }

  return (
    <>
      <Navbar/>
      <Box maxW={'6xl'} margin={'auto'} mt={'15vh'}>
        <Box
          mx={{
            base: 8,
            sm: 8,
            md: 16,
            xl: 16,
          }}
        >
          <Box mt={10} align={'center'}>
            <Heading
              fontSize={{
                base: '24px',
                sm: '26px',
                md: '36px',
                xl: 'auto',
              }}
            >
              Syarat dan Ketentuan Penggunaan
            </Heading>
          </Box>
          <Box mt={16}>
            <Text fontSize={{
                base: 'lg',
                sm: 'lg',
                md: 'xl',
                xl: 'xl'
            }}>Terakhir diperbarui : 28 May 2022</Text>
            <Text fontSize={fontSizeTNC} mt={4}>
              Selamat datang di Platform Favoree.id, terimakasih telah
              menggunakan maupun mengakses Layanan Favoree.id melalui Platform.
              Syarat dan ketentuan penggunaan Platform yang tertera pada halaman
              ini (<span>“Syarat dan Ketentuan Penggunaan”</span>) mengatur
              akses Anda terhadap Platform Favoree.id dan menggunakan seluruh
              fitur di dalamnya.{' '}
            </Text>
            <Text fontSize={fontSizeTNC} mt={6}>
              PENTING. Pengguna (“Anda”) dimohon untuk membaca Syarat dan
              Ketentuan Penggunaan (“Ketentuan Penggunaan”) ini sebelum
              menggunakan layanan yang disediakan di Platform Favoree.id.
            </Text>
            <Text fontSize={fontSizeTNC}>
              Dengan menggunakan layanan di Platform Favoree.id, Anda sadar
              bahwa telah membaca, memahami, mengetahui, menyetujui dan menerima
              seluruh informasi syarat, dan ketentuan penggunaan layanan yang
              terdapat dalam Ketentuan Penggunaan ini. Ketentuan Penggunaan ini
              merupakan suatu perjanjian yang sah antara Favoree.id (“Kami”) dan
              Anda terkait tata cara dan persyaratan penggunaan Platform
              Favoree.id yang berlaku antara Anda dan Kami.
            </Text>
            <Text fontSize={fontSizeTNC} mt={4}>
              Dengan menyetujui Syarat dan Ketentuan Penggunaan ini, Anda
              dianggap cakap menurut hukum Indonesia dan hukum pada yurisdiksi
              yang berlaku. Maka Anda bertanggung jawab atas segala hal yang
              Anda lakukan dalam Platform.
            </Text>
          </Box>
          <Box mt={4}>
            <CHeading data={'Ketentuan Umum'} />

            <UnorderedList fontSize={fontSizeTNC} pl={2}>
              <ListItem>
                Platform Favoree.id ( Website ) ini merupakan milik Favoree.id
                Kami bekerja sama dengan pihak ketiga (“Mitra Kami”) untuk
                mengembangkan, menambah dan/atau meningkatkan fitur serta fungsi
                dalam Aplikasi, dan/atau menyediakan produk dan/atau layanan.
              </ListItem>
              <ListItem>
                Platform Favoree.id digunakan untuk memberikan layanan convert
                antar e-wallet yang disediakan yaitu Gopay, Shopeepay, OVO dan
                Dana dengan aman, praktis dan biaya yang lebih terjangkau.
              </ListItem>
              <ListItem>
                Platform Favoree.id sudah melakukan riset dan percobaan terlebih
                dahulu sebelum menyediakan layanan ke publik.
              </ListItem>
              <ListItem>
                Kami memiliki kebijakan sendiri dan menyeluruh untuk menerima
                atau menunda atau menolak permintaan Anda atas layanan.
              </ListItem>
            </UnorderedList>
          </Box>

          <Box mt={4}>
            <CHeading data={'Convert'} />

            <Text fontSize={fontSizeTNC}>
              Convert merupakan istilah yang digunakan untuk melakukan
              pemindahan uang antar e-wallet tanpa harus menarik uang ke bank
              terlebih dahulu dengan bantuan layanan pihak ketiga (personal atau
              korporasi). Favoree.id bersedia menjadi Platform (pihak ketiga)
              sebagai convert-er dengan proses administrasi yang telah
              disediakan oleh Favoree.id yaitu pengguna melakukan transfer ke
              e-wallet Favoree.id kemudian uang tersebut akan diproses di
              internal Favoree.id untuk kemudian di transfer ke e-wallet berbeda
              yang diinginkan oleh pengguna dengan biaya admin.
            </Text>
            <Text mt={4} fontSize={fontSizeTNC}>
              Adapun prosedur yang harus dilakukan oleh pengguna adalah mengisi
              google form yang sudah disediakan. Pengguna berhak mengisi seluruh
              kolom yang diwajibkan untuk mengisi tanpa terkecuali demi
              kebutuhan layanan convert Favoree.id. Pengguna juga wajib
              melakukan pembayaran ke e-wallet sejenis dan mengupload bukti
              pembayaran di form tersebut. Setelah pengguna sudah mengisi
              seluruh form dan melakukan submit, proses selanjutnya akan menjadi
              kewajiban Favoree.id untuk menindaklanjuti convert yang diajukan
              oleh pengguna. Favoree.id berhak membatalkan convert ketika ada
              data yang tidak sesuai selama proses convert berlangsung.
              Favoree.id dianggap sudah menyelesaikan convert ketika pengguna
              sudah menerima uang ke e-wallet yang dituju dan sudah menerima
              pesan melalui Platform WhatsApp dengan informasi bahwa convert
              sudah berhasil.
            </Text>
          </Box>

          <Box mt={4}>
            <CHeading data={'Kewajiban Pengguna'} />
            <Text fontSize={fontSizeTNC}>
              Kami menyediakan beberapa layanan yang sudah memiliki aturan
              penggunaan berdasarkan ketentuan yang diterbitkan oleh
              masing-masing provider. Dengan menggunakan layanan yang ada di
              Platform Favoree.id, artinya Anda berkewajiban penuh untuk
              mengikuti aturan yang diterbitkan oleh masing-masing provider yang
              telah tersedia di Platform Favoree.id.
            </Text>

            <Text 
                mt={4}
                fontSize={fontSizeTNC}>
              Ada beberapa ketentuan layanan pengguna untuk masing-masing
              provider yang sudah disediakan di Favoree.id diantaranya sebagai
              berikut.
            </Text>

            <UnorderedList
                fontSize={fontSizeTNC}
                pl={2}
            >
              <ListItem>
                Gopay (Gojek e-wallet), bisa dilihat pada tautan berikut <Text as="span" color={colorPallet.blue_four} cursor={'pointer'} onClick={e => window.open("https://www.gojek.com/gopay/", "_blank")} >ini</Text>.
              </ListItem>
              <ListItem>
                Shopeepay, bisa dilihat pada tautan berikut <Text as="span" color={colorPallet.blue_four} cursor={'pointer'} onClick={e => window.open("https://shopeepay.co.id/", "_blank")} >ini</Text>.
              </ListItem>
              <ListItem>OVO, bisa dilihat pada tautan berikut <Text as="span" color={colorPallet.blue_four} cursor={'pointer'} onClick={e => window.open("https://www.ovo.id/", "_blank")} >ini</Text>. </ListItem>
              <ListItem>Dana, bisa dilihat pada tautan berikut <Text as="span" color={colorPallet.blue_four} cursor={'pointer'} onClick={e => window.open("https://www.dana.id/", "_blank")} >ini</Text>.</ListItem>
            </UnorderedList>

            <Text fontSize={fontSizeTNC} mt={4}>
              Anda juga berkewajiban secara penuh untuk mengikuti segala macam
              aturan yang telah ditentukan oleh Favoree.id.
            </Text>
          </Box>

          <Box mt={4}>
            <CHeading data={'Kesediaan dan Persetujuan Pengguna'} />

            <Text fontSize={fontSizeTNC}>
              Untuk layanan yang kami sediakan, ada beberapa pilihan convert
              e-wallet yaitu Gopay, Shopeepay, OVO dan Dana. Saat ini kami
              menyediakan google form yang digunakan untuk melakukan convert
              dengan pengisian data :
            </Text>

            <UnorderedList fontSize={fontSizeTNC} pl={2}>
              <ListItem>Nama pengirim</ListItem>
              <ListItem>e-wallet pengirim</ListItem>
              <ListItem>Nomor atau nama akun pengirim</ListItem>
              <ListItem>Jumlah Convert</ListItem>
              <ListItem>Nama penerima</ListItem>
              <ListItem>e-wallet penerima</ListItem>
              <ListItem>Nomor atau nama akun penerima</ListItem>
              <ListItem>Nomor yang bisa dihubungi</ListItem>
              <ListItem>Kolom Uplaod Bukti Pengiriman</ListItem>
            </UnorderedList>

            <Text mt={4} fontSize={fontSizeTNC}>
              Sehingga menggunakan layanan Platform Favoree.id dengan
              ketersediaan yang sudah disampaikan sebelumnya, berarti Anda
              dianggap setuju :
            </Text>

            <UnorderedList fontSize={fontSizeTNC} pl={2}>
              <ListItem>
                Memberikan informasi terkait data yang dibutuhkan untuk
                kebutuhan layanan dan disimpan sebagai arsip data oleh kami.
              </ListItem>
              <ListItem>
                Favoree.id mengelola uang anda ketika sudah melakukan transfer
                sampai uang tersebut ditransfer ke e-wallet pengirim.
              </ListItem>
              <ListItem>
                Menerima pesan dari Platform WhatsApp ketika ada informasi yang
                perlu disampaikan oleh kami.
              </ListItem>
            </UnorderedList>
          </Box>

          <Box mt={4}>
            <CHeading data={'Pembatalan Layanan'} />
            <Text fontSize={fontSizeTNC}>
              Kami berhak secara penuh untuk tidak memberikan layanan yang
              diajukan Anda di Platform kami jika Anda masuk ke beberapa opsi
              berikut.
            </Text>

            <UnorderedList fontSize={fontSizeTNC} pl={2}>
              <ListItem>
                Tidak mengisi data yang diperlukan yang ada di google form.
              </ListItem>
              <ListItem>
                Tidak melakukan transfer uang ke e-wallet Favoree.id dan
                mengupload Bukti transfer yang palsu.
              </ListItem>
              <ListItem>
                Melakukan pelanggaran baik itu pelanggaran terhadap ketentuan
                provider terkait maupun pelanggaran terhadap ketentuan yang
                dibuat oleh Favoree.id.
              </ListItem>
              <ListItem>
                Melakukan pencemaran nama baik atas pelayanan Favoree.id tanpa
                sebelumnya ada itikad baik untuk menyelesaikan masalah yang
                dimiliki langsung ke Pihak Favoree.id.
              </ListItem>
            </UnorderedList>
          </Box>

          <Box mt={4}>
            <CHeading data={'Aturan dan Larangan Pengguna'} />
            <Text fontSize={fontSizeTNC}>
              Kami membuat aturan yang harus diterapkan oleh setiap penggunan
              Platform Favoree.id yang bertujuan untuk menjaga kenyamanan
              masing-masing pengguna, yaitu sebagai berikut.
            </Text>

            <UnorderedList fontSize={fontSizeTNC} pl={2}>
              <ListItem>
                Anda dihimbau untuk membaca secara keseluruhan Syarat dan
                Ketentuan pengguna yang sudah dilampirkan disini.
              </ListItem>
              <ListItem>
                Anda disarankan untuk membaca alur kerja yang ada di website
                resmi Favoree.id sebelum menggunakan layanan kami.
              </ListItem>
              <ListItem>
                Anda diwajibkan mengisi form dengan data yang sesuai termasuk
                mengupload bukti pembayaran asli dan memastikan untuk mengecek
                kembali form yang sudah diisi agar tidak ada kesalahan ketik
                atau kesalahan input data.
              </ListItem>
              <ListItem>
                Anda dihimbau menggunakan layanan “Laporkan kendala” ketika
                terjadi proses convert yang tidak sesuai dengan ketentuan dari
                Platform Favoree.id.
              </ListItem>
              <ListItem>
                Anda dihimbau menggunakan layanan “Hubungi Admin” yang ada di
                bagian bawah website untuk menanyakan seputar Platform kami atau
                mengajukan kerjasama bisnis.
              </ListItem>
            </UnorderedList>

            <Text mt={4} fontSize={fontSizeTNC}>
              Kami membuat larangan ketika sedang menggunakan layanan yang ada
              di Platform Favoree.id. Diantaranya adalah sebagai berikut.
            </Text>

            <UnorderedList fontSize={fontSizeTNC} pl={2}>
              <ListItem>
                Dilarang mencoba untuk merusak Platform convert di Favoree.id
                baik berupa mengisi form dengan data yang salah atau hacking ke
                website Favoree.id.
              </ListItem>
              <ListItem>Dilarang melakukan pencemaran nama baik</ListItem>
            </UnorderedList>
          </Box>

          <Box mt={4}>
            <CHeading data={'Pembayaran'} />
            <Text fontSize={fontSizeTNC}>
              Favoree.id saat ini masih menyediakan metode pembayaran secara
              manual. Pembayaran manual dilakukan dengan cara melakukan transfer
              ke e-wallet Favoree.id :
            </Text>

            <UnorderedList fontSize={fontSizeTNC} pl={2}>
              <ListItem>Gopay : 0857 3665 3576 </ListItem>
              <ListItem>Shopeepay : 0857 3665 3576</ListItem>
              <ListItem>OVO : 0857 3665 3576</ListItem>
              <ListItem>Dana : 0857 3665 3576</ListItem>
            </UnorderedList>
            <Text mt={4} fontSize={fontSizeTNC}>
            Atau dapat menggunakan metode lain untuk pengguna yang belum melakukan 
            verifikasi e-wallet dengan scan barcode QRIS yang tertera di dalam form pengajuan convert.
            </Text>
            <Text mt={4} fontSize={fontSizeTNC}>
            Saat ini kami membatasi pembayaran saldo maksimal 1.000.000 rupiah per transaksi 
            atau per pengajuan convert. Pengguna bersedia melakukan pembayaran dengan total pesanan minimal 10.000 sampai 500.000 rupiah 
            dengan dipotong sebesar 1.000 rupiah untuk biaya administrasi. Pesanan dengan pengajuan transaksi diatas 500.000 rupiah akan 
            dikenakan biaya administrasi sebesar 2.000 rupiah. Pengguna dengan pengajuan menggunakan pembayaran QRIS akan dipotong 
            biaya administrasi sebesar 2.000 rupiah.
            </Text>

          </Box>

          <Box mt={4}>
            <CHeading data={'Pelanggaran Atas Hukum'} />
            <Text fontSize={fontSizeTNC}>
              Pihak Favoree.id berhak melakukan pelaporan hukum terhadap pihak
              yang dengan sengaja menyerang kehormatan atau nama baik Pihak
              Favoree.id dengan pasal pencemaran nama baik, penghinaan dan/atau
              fitnah di muka umum sesuai ketentuan undang-undang yang berlaku.
            </Text>
          </Box>
          <Box mt={4}>
            <CHeading data={'Kompensasi'} />
            <Text fontSize={fontSizeTNC}>
              Kompensasi akan diberikan oleh pihak Favoree.id jika terjadi
              kerugian akibat kelalaian / kesalahan dari pelayanan Favoree.id.
              Besaran kompensasi diberikan sesuai justifikasi dan ketetapan dari
              Favoree.id yaitu sebesar nominal bukti transfer yang diupload
              melalui google form.
            </Text>
          </Box>
          <Box mt={4} mb={12}>
            <CHeading data={'Kontak Kami'} />
            <Text fontSize={fontSizeTNC}>
              Anda dapat menghubungi Kami terkait dengan Kebijakan Privasi dan
              Ketentuan Penggunaan melalui surat elektronik <Text as="span" color={colorPallet.blue_four} cursor={'pointer'} onClick={sendEmail} >{" favoree.id@gmail.com "}</Text> 
              atau melalui nomor telepon <Text as={'span'} color={colorPallet.blue_four} cursor={'pointer'} onClick={sendMessage}>085736653576</Text>.
            </Text>
          </Box>
        </Box>
      </Box>

      <Footer/>
    </>
  );
};

export { TermCondition };

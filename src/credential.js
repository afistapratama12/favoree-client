
const phone_number = '6281234123412'

export const contact_number = "tel:" + phone_number

export const wa_api = "https://api.whatsapp.com/send?phone=" + phone_number

export const form_url = "https://forms.gle/SXeXmz2owV9HDxSP6"

export const laporkan_kendala = wa_api + "&text=Halo%20Admin%20Saya%20Mau%20Laporkan%20Kendala%20Menggunakan%20Favoree"
export const hubungi_admin = wa_api + '&text=Halo%20Admin%20Saya%20Mau%20Bertanya%20Kami'
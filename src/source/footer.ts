import { hubungi_admin, laporkan_kendala } from "../credential";

import twitter from  "../assets/image/redesign/tw.svg"
import instagram from  "../assets/image/redesign/ig.svg"
import facebook from  "../assets/image/redesign/fb.svg"

export interface FooterItemProps {
    title: string;
    is_internal: boolean;
    is_on_page: boolean
    url: string
}

export interface FooterSocialItemProps {
    src: string;
    alt: string;
    link: string
}

export const sectionTwoList: Array<FooterItemProps> = [{
    title: 'Benefit',
    is_internal : true,
    is_on_page : true,
    url : `#benefit`
}, {
    title: 'About Us',
    is_internal : true,
    is_on_page : true,
    url : `#about_us`
}, {
    title: 'Cara Kerja',
    is_internal : true,
    is_on_page : true,
    url : `#cara_kerja`
}, {
    title: 'Testimoni',
    is_internal : true,
    is_on_page : true,
    url : `#testimoni`
}, {
    title: 'FAQ',
    is_internal : true,
    is_on_page : true,
    url : `#faq`
}]

export const sectionThreeList: Array<FooterItemProps> = [{
    title : "Laporkan Kendala",
    is_internal : false,
    is_on_page : false,
    url : laporkan_kendala
}, {
    title : "Hubungi Admin",
    is_internal : false,
    is_on_page : false,
    url : hubungi_admin
}, {
    title : "Syarat dan Ketentuan",
    is_internal: true,
    is_on_page : false,
    url: `/term-and-condition`
}]

export const socialFooterList: Array<FooterSocialItemProps> = [{
    src: twitter,
    alt: 'twitter-icon',
    link: 'https://www.twitter.com/favoree_id/'
},{
    src: instagram,
    alt: 'instagram-icon',
    link: 'https://www.instagram.com/favoree_id/'
},{
    src: facebook,
    alt: 'facebook-icon',
    link: 'https://www.facebook.com/favoree_id/'
}]
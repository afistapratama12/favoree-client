import FloatingWhatsApp from "react-floating-whatsapp"

import avatar_wa from "../../assets/image/redesign/avatar_wa.png"

import { phone_number} from "../../credential"

export const FloatingWA = () => {
    return (
        <FloatingWhatsApp
            phoneNumber={phone_number}
            styles={{
                backgroundColor: "mediumseagreen",
            }}
            accountName="Favoree.id"
            chatMessage="Halo, ada yang bisa kami bantu?"
            allowClickAway={true}
            allowEsc={true}
            avatar={avatar_wa}
            statusMessage={'Online'}
        />
    )
}

/*
darkgreen
darkolivegreen
darkseagreen
greenyellow
lawngreen
lightgreen
lightseagreen
limegreen
mediumseagreen
mediumspringgreen
palegreen
seagreen
springgreen

*/
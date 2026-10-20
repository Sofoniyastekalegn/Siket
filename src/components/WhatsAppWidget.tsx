import { FloatingWhatsApp } from '@digicroz/react-floating-whatsapp'
import { studio } from '../data/content'

export function WhatsAppWidget() {
    //safety fallback in case the data isn't there
    const waNumber = studio.Whatsapp?.number || '251978695556'
    const waMessage = studio.whatsapp?.defaultMessage || 'Hello!'


    const isDarkMode = document.documentElement.dataset.theme === 'dark'

    return (
        <FloatingWhatsApp
        phoneNumber={waNumber}
        accountName="Siket Digitals"
        avatar="/favicon.png"
        statusMessage="Typically replies within 1 hour"
        chatMessage={waMessage}
        placeholder="Type a message..."
        darkMode={isDarkMode}
        allowClickAway={true}
        allowEsc={true}
        notification={true}
        notificationSound={true}
        


    )
}
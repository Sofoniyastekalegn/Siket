import { FloatingWhatsApp } from '@digicroz/react-floating-whatsapp'
import { studio } from '../data/content'

export function WhatsAppWidget() {
    //safety fallback in case the data isn't there
    const waNumber = studio.whatsapp?.number || '251978695556'
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
        // ux settign to amek the widget feel like native part of the app 
        allowClickAway={true}
        allowEsc={true}

        notification={true}
        notificationSound={true}
        buttonStyle={{ 
            backgroundColor: '#0b777a', // Siket Digitals Logo Green
            color: '#ffffff',
            zIndex: 9999 
          }}
          
          // Styling the chatbox to match your "Paper" and "Rule" brand aesthetics.
          chatboxStyle={{
            borderRadius: '12px',
            border: '1px solid #e6e0d1', // Matches your --paper variable
            zIndex: 9999
          }}
        />



    )
}
import { FaWhatsapp } from 'react-icons/fa';
import { wa } from '@/lib/config';

const WhatsAppButton = () => (
  <a href={wa()} target="_blank" rel="noopener noreferrer"
    className="fixed bottom-24 z-40 p-4 rounded-full bg-[#25D366] shadow-lg hover:scale-110 transition-transform hidden lg:flex"
    style={{ left: '1.25rem' }} aria-label="WhatsApp">
    <FaWhatsapp className="h-7 w-7 text-primary-foreground" />
  </a>
);

export default WhatsAppButton;

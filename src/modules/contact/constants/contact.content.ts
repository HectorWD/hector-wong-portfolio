import type { Localized } from '@/modules/i18n/types/i18n.types';
import type { ContactContent } from '../types/contact.types';

export const CONTACT_CONTENT: Localized<ContactContent> = {
  en: {
    sectionTitle: '06 // SEND CALLING CARD',
    sectionMeta: 'DIRECT UPLINK',
    headline: 'LET US TALK ABOUT WHAT YOU ARE BUILDING.',
    body: 'Open to frontend roles and collaborations in React, React Native and Next.js. Write directly or use the form — it opens your mail client with the message ready.',
    fromLabel: 'YOUR EMAIL',
    fromPlaceholder: 'you@company.com',
    messageLabel: 'MESSAGE',
    messagePlaceholder: 'We are rebuilding our web platform and need a frontend lead...',
    submitLabel: 'DELIVER CALLING CARD',
    mailSubject: 'Portfolio contact',
    directLabel: 'OR REACH ME AT',
  },
  es: {
    sectionTitle: '06 // ENVIAR TARJETA',
    sectionMeta: 'ENLACE DIRECTO',
    headline: 'HABLEMOS DE LO QUE ESTÁS CONSTRUYENDO.',
    body: 'Abierto a puestos y colaboraciones de frontend en React, React Native y Next.js. Escríbeme directo o usa el formulario: abre tu cliente de correo con el mensaje listo.',
    fromLabel: 'TU CORREO',
    fromPlaceholder: 'tu@empresa.com',
    messageLabel: 'MENSAJE',
    messagePlaceholder: 'Estamos rehaciendo nuestra plataforma web y buscamos un líder frontend...',
    submitLabel: 'ENTREGAR TARJETA',
    mailSubject: 'Contacto desde el portafolio',
    directLabel: 'O ESCRÍBEME A',
  },
};

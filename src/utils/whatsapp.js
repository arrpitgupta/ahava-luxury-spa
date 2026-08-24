import { business } from '../config/business';

/**
  Generate WhatsApp URLs with properly encoded pre-filled text.
 */

export const getWhatsAppUrl = (customMessage = "") => {
  const number = business.whatsapp.replace(/[^0-9]/g, '');
  const defaultMsg = `Hello ${business.name}, I would like to enquire about your luxury spa services and availability.`;
  const text = customMessage || defaultMsg;
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
};

export const getServiceWhatsAppUrl = (serviceName, duration, price) => {
  const message = `Hello ${business.name}, I am interested in booking/enquiring about the ${serviceName}${duration ? ` (${duration})` : ''}${price ? ` for ${price}` : ''}. Please share availability and details.`;
  return getWhatsAppUrl(message);
};

export const getBookingFormWhatsAppUrl = ({ serviceName, name, phone, date, time, message: userMsg }) => {
  let message = `Hello ${business.name},\nI would like to book/enquire about:\n\n`;
  message += `Service: ${serviceName || 'Custom Treatment'}\n`;
  if (name) message += `Name: ${name}\n`;
  if (phone) message += `Phone: ${phone}\n`;
  if (date) message += `Preferred Date: ${date}\n`;
  if (time) message += `Preferred Time: ${time}\n`;
  if (userMsg) message += `Message: ${userMsg}\n`;
  message += `\nPlease confirm availability.\nThank you.`;

  return getWhatsAppUrl(message);
};

export const openWhatsApp = (customMessage = "") => {
  const url = getWhatsAppUrl(customMessage);
  window.open(url, '_blank', 'noopener,noreferrer');
};

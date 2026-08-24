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

export const getBookingFormWhatsAppUrl = ({ serviceName, duration, price, name, phone, email, date, time, message: userMsg, branch }) => {
  let message = `✨ *NEW SPA RESERVATION ENQUIRY* ✨\n\n`;
  message += `📍 *Branch:* ${branch || 'HSR Layout, Sector 1, Bengaluru'}\n`;
  message += `💆‍♀️ *Treatment:* ${serviceName || 'Custom Therapy'}\n`;
  if (duration) message += `⏱ *Duration:* ${duration}\n`;
  if (price) message += `💰 *Price:* ${price}\n`;
  message += `\n👤 *GUEST DETAILS*\n`;
  if (name) message += `• Name: ${name}\n`;
  if (phone) message += `• WhatsApp: ${phone}\n`;
  if (email) message += `• Email: ${email}\n`;
  if (date) message += `📅 *Date:* ${date}\n`;
  if (time) message += `⏰ *Time:* ${time}\n`;
  if (userMsg) message += `📝 *Notes:* ${userMsg}\n`;
  message += `\nPlease confirm availability and details for my reservation. Thank you!`;

  return getWhatsAppUrl(message);
};

export const openWhatsApp = (customMessage = "") => {
  const url = getWhatsAppUrl(customMessage);
  window.open(url, '_blank', 'noopener,noreferrer');
};

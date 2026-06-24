import emailjs from '@emailjs/browser';

/**
 * EMAILJS SETUP INSTRUCTIONS:
 * 1. Create a free account at https://www.emailjs.com/
 * 2. Connect an Email Service (e.g., Gmail, Outlook).
 * 3. Create an Email Template with:
 *    - Service ID: (Get from 'Email Services' tab)
 *    - Template ID: (Get from 'Email Templates' tab)
 *    - Template should use variables: {{location}} and {{time}}
 * 4. Get your Public Key from 'Account' -> 'API Keys'.
 * 
 * Replace the placeholders below with your actual IDs.
 */

const SERVICE_ID = 'YOUR_SERVICE_ID';
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

export const sendDateConfirmation = async (location: string) => {
  // If keys are not set, we'll just log to console to prevent errors in demo
  if (SERVICE_ID === 'YOUR_SERVICE_ID') {
    console.log('EmailJS not configured. Date details:', {
      location,
      time: 'Thursday',
      timestamp: new Date().toLocaleString()
    });
    return;
  }

  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        location: location,
        time: 'Thursday',
        timestamp: new Date().toLocaleString(),
        to_email: 'mahmoudmohammedsaad72@gmail.com'
      },
      PUBLIC_KEY
    );
    return response;
  } catch (error) {
    console.error('EmailJS Error:', error);
    throw error;
  }
};

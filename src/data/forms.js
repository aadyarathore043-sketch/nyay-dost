/**
 * Shared select options for the AI Assistant form.
 * Centralized so they can be reused/extended (e.g. from an API) later.
 */

// Indian states & union territories
export const indianStates = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
  'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
  'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
  'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
  'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
  'Andaman & Nicobar Islands', 'Chandigarh',
  'Dadra & Nagar Haveli and Daman & Diu', 'Delhi',
  'Jammu & Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry',
]

// Major Indian languages (extendable)
export const languages = [
  'English', 'Hindi', 'Bengali', 'Telugu', 'Marathi', 'Tamil',
  'Gujarati', 'Urdu', 'Kannada', 'Odia', 'Malayalam', 'Punjabi', 'Assamese',
]

// Placeholder AI response card data (UI demo only)
export const sampleResponse = {
  legalCategory: 'Consumer Dispute — Defective Product / Service',
  summary:
    'Based on your description, this appears to fall under consumer protection law. You may have received a defective product or deficient service and could be entitled to a refund, replacement, or compensation. The Consumer Protection Act, 2019 provides a clear path for resolving such disputes.',
  immediateSteps: [
    'Collect and safely store the bill, invoice, warranty card, and product packaging.',
    'Take clear photos or videos of the defect or issue.',
    'Send a written complaint to the seller/brand via email and keep the proof of sending.',
    'Wait a reasonable period (typically 7–14 days) for their response.',
  ],
  evidenceToPreserve: [
    'Original invoice / receipt and warranty documents',
    'Photos or videos of the defective product or service',
    'All communication with the seller (emails, chats, call logs)',
    'Bank/UPI transaction proof of payment',
  ],
  governmentResources: [
    { label: 'Consumer Helpline (1915)', href: '#', note: 'File & track consumer complaints online' },
    { label: 'NCDRC — National Consumer Disputes Redressal Commission', href: '#', note: 'For higher-value claims' },
    { label: 'Consumer Affairs Ministry', href: '#', note: 'Official portal & resources' },
  ],
  helplines: [
    { name: 'National Consumer Helpline', number: '1915' },
    { name: 'Consumer Affairs (Toll Free)', number: '1800-11-4000' },
  ],
  emergencyContacts: [
    { name: 'Police', number: '100' },
    { name: 'Cybercrime (if online fraud)', number: '1930' },
  ],
  whenToContactLawyer:
    'Consider consulting a qualified advocate if the claim value is high, the seller refuses to resolve the issue, the dispute involves injury or significant financial loss, or you plan to approach the consumer commission. A lawyer can help draft the complaint and represent you effectively.',
}

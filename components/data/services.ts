 
 export interface ServiceProps {
   name: string;
   status: string;
   logo: string;
   href: string;
   target: string;
   text: string;
 }
 
 export const Services: ServiceProps[] = [
    { name: 'Store', status: 'Coming soon...', logo: '🛍️', href: '#', target: '', text: 'Spend It Like Royalty' },
    { name: 'Staffing', status: 'visit', logo: '👥', href: 'https://staffing.petrolage.tech', target: '_blank', text: 'The Force Behind Nigeria’s Workforce.' },
    { name: 'Travel', status: 'Coming soon...', logo: '✈️', href: '#', target: '', text: 'Visit Nigeria – Where Every Journey Tells a Story' },
    { name: 'Contact', status: 'send', logo: '📧', href: '#above-footer', target: '', text: 'Got something to say ?' }
  ]
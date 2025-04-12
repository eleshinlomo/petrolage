 
 export interface ServiceProps {
   name: string
   status: string
   logo: string
   href: string
 }
 
 export const Services: ServiceProps[] = [
    { name: 'Store', status: 'Coming soon...', logo: '🛍️', href: '#' },
    { name: 'Staffing', status: 'visit', logo: '👥', href: 'https://staffing.petrolage.tech' },
    { name: 'Travel', status: 'Coming soon...', logo: '✈️', href: '#' },
    { name: 'Contact', status: 'send', logo: '📧', href: '#above-footer' }
  ]
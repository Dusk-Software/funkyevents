import corporate from '../assets/images/corporate.jpg';
import weddingReception from '../assets/images/pexels-jonathanborba-12846017.jpg';
import engagementBackdrop from '../assets/images/pexels-tahaasamett-26623743.jpg';
import portfolioHero from '../assets/images/portfolio-hero.webp';
import portfolioRoom from '../assets/images/portfolio-room.webp';
import portfolioBackdrop from '../assets/images/portfolio-backdrop.webp';
import portfolioTables from '../assets/images/portfolio-tables.webp';
import portfolioRentals from '../assets/images/portfolio-rentals.webp';
import portfolioDesserts from '../assets/images/portfolio-desserts.webp';
import portfolioDrinks from '../assets/images/portfolio-drinks.webp';
import portfolioDetails from '../assets/images/portfolio-details.webp';
import pexelsHero from '../assets/images/pexels-jonathanborba-35985211.jpg';

type Service = {
	title: string;
	slug: string;
	icon: 'rings' | 'sparkles' | 'heart' | 'flower' | 'calendar';
	image: ImageMetadata;
	imageAlt: string;
	description: string;
	details: string;
	includes: string[];
};

export const business = {
	name: 'Funky Events',
	planner: 'Josephine Ishioye',
	email: 'funkeishioye@gmail.com',
	phone: '(401) 516-0937',
	website: 'https://www.funkyevents.net',
	serviceArea: 'Rhode Island & Surrounding Areas',
	maps: 'https://maps.app.goo.gl/6dbn5ExU9MuMPyy57',
};

export const testimonials = [
	{ quote: 'the hall looked amazing', name: 'Oyinkan', event: 'Bridal shower' },
	{ quote: 'setup was phenomenal and classy', name: 'Lola O', event: 'Bridal shower' },
];

export const navigation = [
	{ label: 'Home', href: '/' },
	{ label: 'About', href: '/about/' },
	{ label: 'Services', href: '/services/' },
	{ label: 'Gallery', href: '/gallery/' },
	{ label: 'Testimonials', href: '/testimonials/' },
	{ label: 'Blog', href: '/blog/' },
	{ label: 'Contact', href: '/contact/' },
];

export const services: Service[] = [
	{
		title: 'Weddings',
		slug: 'weddings',
		icon: 'rings',
		image: weddingReception,
		imageAlt: 'Outdoor wedding reception with floral centerpieces and elegant table settings.',
		description: 'Event decoration and planning for your wedding.',
		details: 'Funky Events offers event decoration and planning for weddings. Party rentals are also available.',
		includes: ['Event decoration', 'Event planning', 'Party rentals'],
	},
	{
		title: 'Birthdays',
		slug: 'birthdays',
		icon: 'heart',
		image: portfolioHero,
		imageAlt: 'Event setup supplied for the Funky Events portfolio.',
		description: 'Event decoration and planning for birthday celebrations.',
		details: 'Funky Events offers event decoration and planning for birthdays. Party rentals are also available.',
		includes: ['Event decoration', 'Event planning', 'Party rentals'],
	},
	{
		title: 'Baby Showers',
		slug: 'baby-showers',
		icon: 'heart',
		image: portfolioBackdrop,
		imageAlt: 'Event setup supplied for the Funky Events portfolio.',
		description: 'Event decoration and planning for baby showers.',
		details: 'Funky Events offers event decoration and planning for baby showers. Party rentals are also available.',
		includes: ['Event decoration', 'Event planning', 'Party rentals'],
	},
	{
		title: 'Traditional Engagements',
		slug: 'traditional-engagements',
		icon: 'flower',
		image: engagementBackdrop,
		imageAlt: 'Engagement-party backdrop with floral arrangements, a neon sign, and white seating.',
		description: 'Event decoration and planning for traditional engagements.',
		details: 'Funky Events offers event decoration and planning for traditional engagements. Party rentals are also available.',
		includes: ['Event decoration', 'Event planning', 'Party rentals'],
	},
	{
		title: 'Church Events',
		slug: 'church-events',
		icon: 'calendar',
		image: portfolioTables,
		imageAlt: 'Event setup supplied for the Funky Events portfolio.',
		description: 'Event decoration and planning for church events.',
		details: 'Funky Events offers event decoration and planning for church events. Party rentals are also available.',
		includes: ['Event decoration', 'Event planning', 'Party rentals'],
	},
	{
		title: 'Graduation Parties',
		slug: 'graduation-parties',
		icon: 'sparkles',
		image: portfolioDesserts,
		imageAlt: 'Event setup supplied for the Funky Events portfolio.',
		description: 'Event decoration and planning for graduation parties.',
		details: 'Funky Events offers event decoration and planning for graduation parties. Party rentals are also available.',
		includes: ['Event decoration', 'Event planning', 'Party rentals'],
	},
	{
		title: 'Corporate Events',
		slug: 'corporate-events',
		icon: 'sparkles',
		image: corporate,
		imageAlt: 'Conference room set for a presentation.',
		description: 'Event decoration and planning for corporate events.',
		details: 'Funky Events offers event decoration and planning for corporate events. Party rentals are also available.',
		includes: ['Event decoration', 'Event planning', 'Party rentals'],
	},
];

export const galleryItems = [
	{ title: 'A room ready to gather', category: 'Event Setups', image: portfolioRoom, alt: 'Banquet room arranged with round tables and dressed chairs' },
	{ title: 'A little party magic', category: 'Decor & Backdrops', image: portfolioBackdrop, alt: 'Balloon arch and decorated focal table for a celebration' },
	{ title: 'The celebration table', category: 'Tables & Party Details', image: portfolioTables, alt: 'Round dining tables dressed for a private celebration' },
	{ title: 'A sweet welcome', category: 'Decor & Backdrops', image: portfolioHero, alt: 'Dessert display framed by a balloon arch' },
	{ title: 'Ready to serve', category: 'Tables & Party Details', image: portfolioRentals, alt: 'Buffet station set with chafing dishes, plates, and cutlery' },
	{ title: 'A sweet finish', category: 'Tables & Party Details', image: portfolioDesserts, alt: 'Dessert and fruit display arranged for a party' },
	{ title: 'Cheers to the gathering', category: 'Tables & Party Details', image: portfolioDrinks, alt: 'Colorful drinks ready to serve at a celebration' },
	{ title: 'The little details', category: 'Party Details', image: portfolioDetails, alt: 'Playful photo booth signs arranged as party decor' },
];

export const processSteps = [
	{ number: '01', title: 'The hello', text: 'Start with a conversation about the occasion and what you have in mind.' },
	{ number: '02', title: 'The plan', text: 'Discuss event planning, decorations, and party rentals for your gathering.' },
	{ number: '03', title: 'The details', text: 'Work through the details that matter for your event.' },
	{ number: '04', title: 'The moment', text: 'Bring your gathering together and enjoy the occasion.' },
];

export { pexelsHero as heroImage };

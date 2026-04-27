import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  standalone: false,
})
export class MainComponent {
  readonly coreSkillItems = [
    'JavaScript',
    'TypeScript',
    'Angular',
    'RxJS',
    'Astro',
    'React',
    'Next.js',
    'HTML5',
    'CSS3/SASS',
    'Tailwind CSS',
    'Bootstrap',
    'REST APIs',
    'PostgreSQL',
    'Supabase',
    'Git/GitHub',
    'Responsive Design',
    'UI/UX',
  ];

  readonly experienceItems = [
    {
      title: 'Front-End Developer',
      company: 'Obrela Security Industries',
      period: 'Mar 2024 - Present',
    },
    {
      title: 'Data Entry Specialist',
      company: 'Naftemporiki.gr',
      period: 'Sep 2022 - Mar 2024',
    },
    {
      title: 'Front-End Developer Intern',
      company: 'WP',
      period: 'Jan 2022 - Apr 2022',
    },
  ];

  readonly serviceItems = [
    {
      title: 'Full Site Development',
      text: 'End-to-end website creation from design to deployment, combining aesthetics with functionality for seamless user experiences across all devices.',
    },
    {
      title: 'Web App Development',
      text: 'Building interactive, scalable web applications with Angular, React, and TypeScript, featuring real-time data and responsive interfaces.',
    },
    {
      title: 'E-Shop Development',
      text: 'Creating robust online stores with secure payment processing, inventory management, and optimized checkout flows for maximum conversion.',
    },
    {
      title: 'Landing Page Development',
      text: 'Developing high-converting, fast-loading landing pages optimized for campaigns, product launches, and lead generation.',
    },
  ];

  readonly recognitionItems = [
    {
      title: 'Academic Excellence, BSc Computer Science',
      company: 'British Computer Society',
      period: 'Certification',
    },
    {
      title: 'Angular - The Complete Guide',
      company: 'Udemy',
      period: 'Certification',
    },
    {
      title: 'Full-Stack Web Development',
      company: 'Various Certifications',
      period: 'Ongoing',
    },
    {
      title: 'Languages',
      company: 'Greek (Native), English (Fluent), German (Beginner)',
      period: 'Communication',
    },
  ];

  readonly projectItems = [
    {
      title: 'Fresh Cuts Barber Studio',
      description:
        'Portfolio website for a barbershop with modern design, that adapts to the character of the brand and highlights the services offered.',
      image: '/assets/images/freshcuts-preview.webp',
      href: 'https://freshcuts.gr',
    },
    {
      title: 'Panos Koufoudakis Dietitian',
      description:
        'Portfolio website for a dietitian with clean design, that effectively presents the services offered and the professional background of the dietitian.',
      image: '/assets/images/koufoudakis-preview.webp',
      href: 'https://koufoudakis-dietitian.gr',
    },
    {
      title: 'Kivia - SaaS Product',
      description:
        'SaaS product platform that provides a comprehensive solution for managing and optimizing business operations for nutritionists.',
      image: '/assets/images/kivia-preview.webp',
      href: 'https://usekivia.com',
    },
  ];
}

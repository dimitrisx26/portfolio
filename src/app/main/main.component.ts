import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  standalone: false,
})
export class MainComponent {
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
      title: 'Software engineering',
      text: 'Designing maintainable application code with an emphasis on clarity, reliability, and long-term support.',
    },
    {
      title: 'Web application development',
      text: 'Building responsive browser-based products with Angular, TypeScript, HTML, and CSS.',
    },
    {
      title: 'Architecture and refactoring',
      text: 'Modernizing legacy code, improving structure, and keeping components reusable and easy to evolve.',
    },
    {
      title: 'APIs and reactive data',
      text: 'Integrating RESTful APIs and managing application state with RxJS in production environments.',
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
      title: 'usekivia.com',
      description:
        'SaaS product website and platform, with a modern and professional design that effectively communicates the value proposition of the product.',
      image: '/assets/images/kivia-preview.webp',
      href: 'https://usekivia.com',
    },
  ];
}

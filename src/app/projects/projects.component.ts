import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  standalone: false,
})
export class ProjectsComponent {
  readonly projectItems = [
    {
      title: 'Fresh Cuts Booking Platform',
      description:
        'Online appointment booking platform for Fresh Cuts, with service and barber selection, scheduling, and an administration dashboard.',
      image: '/assets/images/freshcuts-book-preview.webp',
      href: 'https://booking.freshcuts.gr',
    },
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

import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  standalone: false,
})
export class MainComponent {
  readonly cvDownloadUrl =
    'https://drive.google.com/uc?export=download&id=1U1PRXHN7D7zvES9OS12zcB_zqtoQ4vNg';

  readonly skillGroups = [
    { title: 'Frontend', items: ['TypeScript', 'JavaScript', 'Angular', 'React', 'Next.js', 'Astro', 'RxJS'] },
    { title: 'Backend & data', items: ['REST APIs', 'PostgreSQL', 'Supabase'] },
    { title: 'Design & delivery', items: ['HTML5', 'CSS3/SASS', 'Tailwind CSS', 'Bootstrap', 'Responsive Design', 'UI/UX', 'Git/GitHub'] },
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
      title: 'Web applications',
      text: 'Responsive applications with modern frontend frameworks, APIs, and databases, from customer-facing flows to administrative tools.',
    },
    {
      title: 'Websites & landing pages',
      text: 'Fast, responsive websites that present a business clearly and help visitors find the information they need.',
    },
    {
      title: 'Product development',
      text: 'Improving existing applications through thoughtful interfaces, maintainable components, and collaborative development.',
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

}

import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private metaService: Meta) {
    this.metaService.addTag({
      name: 'title',
      content: 'Dimitrios Xynos - Front-End Developer',
    });
    this.metaService.addTag({
      name: 'description',
      content:
        'Dimitrios Xynos is a Computer Science undergraduate specializing in Front-End Development. With expertise in HTML, CSS, JavaScript, and Angular, Dimitrios creates visually appealing and user-friendly websites. Experience in data entry, front-end development, and social media management. Visit the site to explore projects and connect with Dimitrios.',
    });
    this.metaService.addTag({
      name: 'keywords',
      content:
        'Dimitrios Xynos, Dimitrios, Xynos, Front-End Developer, Front-End, Developer, HTML, CSS, JavaScript, Angular, Computer Science, Computer, Science, Undergraduate, Undergrad, Undergraduate Student, Student, Web Developer, Web, Web Development, Web Dev, Web Developer, Web Design, Web Designer, Web Design and Development, Web Design and Dev, Web Design and Developer, Web Design and Designer, Web Designer and Developer, Web Designer and Dev, Web Designer and Design, Web Dev and Design, Web Dev and Developer, Web Dev and Designer, Web Dev and Development, Web Development and Design, Web Development and Dev, Web Development and Developer, Web Development and Designer, Web Development and Development, Web Dev and Dev, Web Dev and Development, Web Dev and Designer, Web Dev and Design, Web Dev and Developer, Web Design and Dev, Web Design and Development, Web Design and Designer, Web Design and Design, Web Design and Developer',
    });
    this.metaService.addTag({
      name: 'author',
      content: 'Dimitrios Xynos',
    });
  }
}

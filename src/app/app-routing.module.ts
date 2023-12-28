import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { SkillsComponent } from "./skills/skills.component";
import { ContactComponent } from "./contact/contact.component";
import { ProjectsComponent } from "./projects/projects.component";

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'skills',
    component: SkillsComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { InquireComponent } from './component/inquire/inquire.component';
import { IntroduceComponent } from './component/introduce/introduce.component';
import { SkillComponent } from './component/skill/skill.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'introduce', component: IntroduceComponent},
  { path: 'skill', component: SkillComponent },
  { path: 'inquire', component: InquireComponent},
  { path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

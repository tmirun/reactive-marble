import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
const routes: Routes = [
  { path: '', redirectTo: '/creators/create', pathMatch: 'full' },
  {
    path: ':category/:operator',
    component: MainComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

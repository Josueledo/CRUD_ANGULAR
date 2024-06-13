import { Routes } from '@angular/router';
import { PostCostomerComponent } from './components/post-costomer/post-costomer.component';
import { GetAllCostomersComponent } from './components/get-all-costomers/get-all-costomers.component';
import { UpdateCostomerComponent } from './components/update-costomer/update-costomer.component';

export const routes: Routes = [
  {
    path: 'customer',
    component:PostCostomerComponent
  },
  {
    path: '',
    component:GetAllCostomersComponent
  },
  {
    path: 'customer/:id',
    component:UpdateCostomerComponent
  }
];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUsersComponent } from './all-users/all-users.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { SingleUserComponent } from './single-user/single-user.component';
import { UserPageComponent } from './user-page/user-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'users',
    component: UserPageComponent,
    children: [
      { path: '', component: AllUsersComponent },
      {
        path: 'single',
        component: SingleUserComponent,
      },
    ],
  },
  {
    path: 'products',
    component: ProductPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

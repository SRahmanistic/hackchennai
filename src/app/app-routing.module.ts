import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopItemsComponent } from './shop-items/shop-items.component';
import { ItemsComponent } from './items/items.component';

const routes: Routes = [
  {path: 'medicine', component: ShopItemsComponent },
  {path: 'kirana', component: ItemsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

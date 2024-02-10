import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountOperationsComponent } from './account-operations/account-operations.component';
import { AddOperationComponent } from './add-operation/add-operation.component';

const routes: Routes = [
  { path: 'operations', component: AccountOperationsComponent },
  { path: 'add-operations', component: AddOperationComponent },
  { path: '', redirectTo: '/operations', pathMatch: 'full' },
  { path: '**', redirectTo: '/operations', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

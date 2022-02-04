import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'records',
    loadChildren: () =>
      import('./features/records/records.module').then((m) => m.RecordsModule)
  },
  {
    path: 'live',
    loadChildren: () =>
      import('./features/live/live.module').then((m) => m.LiveModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

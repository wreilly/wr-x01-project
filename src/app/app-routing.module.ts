
// https://angular.io/tutorial/toh-pt5#add-the-approutingmodule

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrDashboardMaterialComponent } from './wr-dashboard-material/wr-dashboard-material.component';
import { WrTableMaterialComponent } from './wr-table-material/wr-table-material.component';



const wrRoutes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'dashboard', component: WrDashboardMaterialComponent },
	{ path: 'table', component: WrTableMaterialComponent }
	
];

@NgModule({
	imports: [ RouterModule.forRoot(wrRoutes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule { }

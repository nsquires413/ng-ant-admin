import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';

import { StandardTableRoutingModule } from './standard-table-routing.module';
import { StandardTableComponent } from './standard-table.component';

@NgModule({
    imports: [SharedModule, StandardTableRoutingModule, StandardTableComponent]
})
export class StandardTableModule {}

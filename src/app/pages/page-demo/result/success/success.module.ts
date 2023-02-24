import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';

import { SuccessRoutingModule } from './success-routing.module';
import { SuccessComponent } from './success.component';

@NgModule({
    imports: [CommonModule, SharedModule, SuccessRoutingModule, SuccessComponent]
})
export class SuccessModule {}

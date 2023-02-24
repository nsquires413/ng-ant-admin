import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { MenuModalModule } from '@widget/biz-widget/system/menu-modal/menu-modal.module';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';

@NgModule({
    imports: [SharedModule, MenuModalModule, MenuRoutingModule, MenuComponent]
})
export class MenuModule {}

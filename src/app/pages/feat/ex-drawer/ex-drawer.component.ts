import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { ExDrawerDrawerService } from '@app/drawer/biz-drawer/ex-drawer-drawer/ex-drawer-drawer.service';
import { PageHeaderType } from '@shared/components/page-header/page-header.component';
import { ModalBtnStatus } from '@widget/base-modal';
import { NzWaveModule } from 'ng-zorro-antd/core/wave';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';

@Component({
    selector: 'app-ex-drawer',
    templateUrl: './ex-drawer.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [PageHeaderComponent, NzInputModule, FormsModule, NzButtonModule, NzWaveModule]
})
export class ExDrawerComponent implements OnInit {
  pageHeaderInfo: Partial<PageHeaderType> = {
    title: '抽屉封装',
    breadcrumb: ['首页', '抽屉封装'],
    desc: '小小的抽屉里面藏着我好多大大的梦想'
  };
  data = '';
  dataFromDrawer = '';

  constructor(private drawerService: ExDrawerDrawerService, private cdr: ChangeDetectorRef) {}

  showDrawer(): void {
    this.drawerService.show({ nzTitle: '服务创建' }, { name: this.data }).subscribe(({ modalValue, status }) => {
      if (status === ModalBtnStatus.Cancel) {
        return;
      }
      this.dataFromDrawer = modalValue.password;
      this.cdr.markForCheck();
    });
  }

  ngOnInit(): void {}
}

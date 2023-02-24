import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';

import { AdComponent, DynamicComponent } from '@core/services/types';
import { AdDirective } from '@shared/directives/ad.directive';

import { ApplicationComponent } from './application/application.component';
import { ArticleComponent } from './article/article.component';
import { ProjectsComponent } from './projects/projects.component';
import { NumberLoopPipe } from '../../../../shared/pipes/number-loop.pipe';
import { AdDirective as AdDirective_1 } from '../../../../shared/directives/ad.directive';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NgFor, NgIf } from '@angular/common';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';

interface TabInterface {
  label: string;
  component: DynamicComponent;
}

@Component({
    selector: 'app-personal-center',
    templateUrl: './personal-center.component.html',
    styleUrls: ['./personal-center.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NzGridModule, NzCardModule, NzAvatarModule, NzTypographyModule, NzIconModule, NzButtonModule, NzDividerModule, NgFor, NzTagModule, NgIf, NzNoAnimationModule, NzInputModule, FormsModule, NzTabsModule, AdDirective_1, NumberLoopPipe]
})
export class PersonalCenterComponent implements OnInit {
  tagArray: string[] = ['很有想法的', '专注设计', '大长腿', '川妹子', '海纳百川'];
  inputVisible = false;
  @ViewChild('inputElement', { static: false }) inputElement?: ElementRef;
  inputValue = '';
  tabData: TabInterface[] = [
    { label: '文章(8)', component: new DynamicComponent(ArticleComponent, {}) },
    { label: '应用(8)', component: new DynamicComponent(ApplicationComponent, {}) },
    { label: '项目(8)', component: new DynamicComponent(ProjectsComponent, {}) }
  ];

  @ViewChild(AdDirective, { static: true }) adHost!: AdDirective;

  constructor() {}

  to(adItem: TabInterface): void {
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent<AdComponent>(adItem.component.component);
    componentRef.instance.data = adItem.component.data;
  }

  handleInputConfirm(): void {
    if (this.inputValue && this.tagArray.indexOf(this.inputValue) === -1) {
      this.tagArray = [...this.tagArray, this.inputValue];
    }
    this.inputValue = '';
    this.inputVisible = false;
  }

  showInput(): void {
    this.inputVisible = true;
    setTimeout(() => {
      this.inputElement?.nativeElement.focus();
    }, 10);
  }

  ngOnInit(): void {
    this.to(this.tabData[0]);
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent, SidebarComponent } from '../shared';

import { DataService } from '../shared/services/data-service';

import { 
    NotificationComponent
} from './dashboard/components';
import { MapComponent } from './map/map.component';
import { GrantComponent } from './grant/grant.component';

@NgModule({
    imports: [
        CommonModule,
        NgbDropdownModule.forRoot(),
        LayoutRoutingModule,
        TranslateModule
    ],
    declarations: [
        LayoutComponent,
        HeaderComponent,
        SidebarComponent,
        NotificationComponent,
        MapComponent,
        GrantComponent
    ],
    providers: [DataService]
})
export class LayoutModule { }

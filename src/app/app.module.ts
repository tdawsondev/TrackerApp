import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InitiativeItemComponent } from './IniativeTracker/initiative-item/initiative-item.component';
import { FormsModule } from '@angular/forms';
import {TrackerComponent} from './IniativeTracker/tracker/tracker.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { SpellSlotTrackerComponent } from './spell-slot-tracker/spell-slot-tracker.component';
import { SpellslotComponent } from './spellslot/spellslot.component';
import { SmallslotComponent } from './smallslot/smallslot.component';
import { MonsterViewerComponent } from './monster-viewer/monster-viewer.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MonsterFilterPipe } from './monster-filter.pipe';
import { MonsterDetailComponent } from './monster-detail/monster-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    InitiativeItemComponent,
    TrackerComponent,
    HomeComponent,
    SpellSlotTrackerComponent,
    SpellslotComponent,
    SmallslotComponent,
    MonsterViewerComponent,
    MonsterFilterPipe,
    MonsterDetailComponent
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

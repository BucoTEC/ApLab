import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BottomServiceService } from './bottom-service.service';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { ReferenceComponentComponent } from './reference-component/reference-component.component';
import { TopServiceService } from './top-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    ReferenceComponentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [TopServiceService, BottomServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}

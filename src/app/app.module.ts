import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhaserCanvasComponent } from './phaser/phaser-canvas.component';

@NgModule({
  declarations: [
    AppComponent,
    PhaserCanvasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

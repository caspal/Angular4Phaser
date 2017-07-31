import { Component, ViewChild, ElementRef } from '@angular/core';
import { PhaserCanvasComponent } from './phaser/phaser-canvas.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(PhaserCanvasComponent)
  phaserCanvasComponent: PhaserCanvasComponent;

  clickCount = 0;
  buttonEnabled = true;

  onClickedOnAlbert(clicked: void) {
    this.clickCount++;
  }

  onAlbertFinishedRoll(finsihed: void) {
    this.buttonEnabled = true;
  }

  doBarrel(): void {
    this.buttonEnabled = false;
    this.phaserCanvasComponent.doBarrel();
  }
}

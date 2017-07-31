/// <reference types="phaser-ce" />

import { Component, OnInit, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'phaser',
  templateUrl: './phaser-canvas.component.html'
})
export class PhaserCanvasComponent implements OnInit {
  @Output() private onClickedOnAlbert = new EventEmitter<void>();
  @Output() private onAlbertFinishedRoll = new EventEmitter<void>();
  private game: Phaser.Game;
  private sprites: { [key: string]: Phaser.Sprite; } = {};
  private scaleManager: Phaser.ScaleManager;

  constructor(private elRef: ElementRef) { }

  @HostListener('window:resize', ['$event'])
  private sizeChange(event) {
    this.scaleManager.setGameSize(this.getWidth(), 600);
    const einsteinSprite = this.sprites.einstein;
    einsteinSprite.x = this.game.world.centerX;
    einsteinSprite.y = this.game.world.centerY;
  }

  ngOnInit(): void {
    const canvasWidth: number = this.getWidth();
    this.game = new Phaser.Game(canvasWidth, 600, Phaser.AUTO, 'phaserCanvas', { preload: this.preload, create: this.create(this) });
    this.scaleManager = new Phaser.ScaleManager(this.game, canvasWidth, 600);
  }

  private getWidth(): number {
    const canvasWidth: number = this.elRef.nativeElement.offsetParent.offsetWidth;
    return canvasWidth;
  }

  private preload(): void {
    this.game.load.image('einstein', 'assets/pics/ra_einstein.png');
  }

  private create(canvasComp: PhaserCanvasComponent): Function {
    return () => {
      const imageKey = 'einstein';
      const sprite: Phaser.Sprite = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, imageKey);
      canvasComp.sprites[imageKey] = sprite;
      sprite.anchor.setTo(0.5, 0.5);
      sprite.inputEnabled = true;
      sprite.events.onInputDown.add(() => {
        canvasComp.onClickedOnAlbert.emit(null);
      }, this);
    };
  }

  public doBarrel(): void {
    const colors: string[] = ['#9400D3', '#4B0082', '#0000FF', '#00FF00', '#FFFF00', '#FF7F00', '#FF0000'];
    const einsteinSprite = this.sprites.einstein;
    const style = { font: '65px Arial', fill: '#ff0044', align: 'center' };
    const text = this.game.add.text(einsteinSprite.x + 60, einsteinSprite.y + 100, 'uaahhh', style);
    text.rotation = 0.3;
    text.anchor.setTo(0.3, 0.3);

    const onAlbertFinishedRoll = this.onAlbertFinishedRoll;
    const looper = setInterval(function () {
      einsteinSprite.angle += 10;
      text.angle += 10;
      text.addColor(colors[Math.floor(Math.random() * colors.length)], 0);
      if (einsteinSprite.angle === 0) {
        clearInterval(looper);
        text.destroy();
        onAlbertFinishedRoll.emit(null);
      }
    }, 100);
  }
}

/// <reference types="phaser-ce" />

import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'phaser',
  templateUrl: './phaser-canvas.component.html'
})
export class PhaserCanvasComponent implements OnInit {

  clickCount: number;
  game: Phaser.Game;
  sprites: { [key: string]: Phaser.Sprite; } = {};

  ngOnInit(): void {
    this.clickCount = 0;
    this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaserCanvas', { preload: this.preload, create: this.create(this) });
  }

  preload(): void {
    this.game.load.image('einstein', 'assets/pics/ra_einstein.png');
  }

  create(canvasComp: PhaserCanvasComponent): Function {
    return () => {
      const imageKey = 'einstein';
      const sprite: Phaser.Sprite = this.game.add.sprite(400, 300, imageKey);
      canvasComp.sprites[imageKey] = sprite;
      sprite.anchor.setTo(0.5, 0.5);
      sprite.inputEnabled = true;
      sprite.events.onInputDown.add(() => {
        canvasComp.clickCount++;
      }, this);
    };
  }

  doBarrel(): void {
    const colors: string[] = ['#9400D3', '#4B0082', '#0000FF', '#00FF00', '#FFFF00', '#FF7F00', '#FF0000'];
    const einsteinSprite = this.sprites.einstein;
    const style = { font: '65px Arial', fill: '#ff0044', align: 'center' };
    const text = this.game.add.text(einsteinSprite.x + 60, einsteinSprite.y + 100, 'uaahhh', style);
    text.rotation = 0.3;
    text.anchor.setTo(0.3, 0.3);
    const looper = setInterval(function () {
      console.log(einsteinSprite.angle);
      einsteinSprite.angle += 10;
      text.angle += 10;
      text.addColor(colors[Math.floor(Math.random() * colors.length)], 0);
      if (einsteinSprite.angle === 0) {
        clearInterval(looper);
        text.destroy();
      }
    }, 100);
  }
}

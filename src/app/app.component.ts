import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'botonera';

  aplicarSonido(numero: number):void{
    const audio = new Audio();
    audio.src = '../assets/sounds/sonido' + numero + '.mp3';
    audio.load();
    audio.play();
  }
}

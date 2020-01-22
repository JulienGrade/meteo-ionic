import { Component } from '@angular/core';
import { Geolocation }  from '@ionic-native/geolocation/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private geolocation: Geolocation,
    private router: Router
    ) {}
  ngOnInit(){
    // Au chargement de l'appli n affiche les coords gps
    this.geolocation.watchPosition().subscribe((data)=>{
      console.log(data);
    });
  }

  // On se rend sur la page /about
  navToAbout(){
    this.router.navigate(['/about']);
  }
}

import { Component } from '@angular/core';
import { Geolocation }  from '@ionic-native/geolocation/ngx';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  city= 'Lille';
  meteo;

  constructor(
    private geolocation: Geolocation,
    private router: Router,
    private storage: Storage,
    private http: HttpClient
    ) {}

  ngOnInit(){
    // Au chargement de l'appli n affiche les coords gps
    this.geolocation.watchPosition().subscribe((data)=>{
      console.log(data);
    });
  }
  ionViewWillEnter(){
    
    this.storage.get('city').then(city => {

      if (null !== city) {
        this.city = city;
      }
      this.http
        .get('https://www.prevision-meteo.ch/services/json/'+this.city)
        .toPromise()
        .then(meteo=>this.meteo=meteo);

    });
  }
  

  // On se rend sur la page /about
  navToAbout(){
    this.router.navigate(['/about']);
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { dataDiriItem } from '../../models/data-diri/data-diri.interface';
import { AngularFireDatabase, FirebaseListObservable  } from 'angularfire2/database';
import { HomePage } from '../home/home';

//import { database } from 'firebase';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  //creating new object
  dataDiriItem = {} as dataDiriItem

  dataDiriItemRef$: FirebaseListObservable<dataDiriItem[]>

  constructor(public navCtrl: NavController, public navParams: NavParams,  private database: AngularFireDatabase) {

  this.dataDiriItemRef$ = this.database.list('profilee');
   }

  doRegister(dataDiriItem: dataDiriItem){
    this.dataDiriItemRef$.push({
      Nama: this.dataDiriItem.Nama,
      Phone: this.dataDiriItem.Phone,
      Alamat: this.dataDiriItem.Alamat
    });
    //console.log(dataDiri);
    this.dataDiriItem = {} as dataDiriItem;
    this.navCtrl.setRoot(HomePage);
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad registerPage');
  // }

 

  // ionViewDidEnter(){
  //   //Set latitude and longitude of some place
  //   this.map = new google.maps.Map(document.getElementById('map'), {
  //     center: { lat: -6.556731, lng: 106.725945 },
  //     zoom: 15
  //   });
  // }

  // updateSearchResults(){
  //   if (this.autocomplete.input == '') {
  //     this.autocompleteItems = [];
  //     return;
  //   }
  //   this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input },
  //   (predictions, status) => {
  //     this.autocompleteItems = [];
  //     this.zone.run(() => {
  //       predictions.forEach((prediction) => {
  //         this.autocompleteItems.push(prediction);
  //       });
  //     });
  //   });
  // }  

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Modal, ModalController, ModalOptions } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //Declaration
  name = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private modal: ModalController) {
  }

  //Autoload
  ionViewDidLoad() {}

  //Delete
  delete(sid){
    var id = 0;
    var name1 = [];
    for(var a = 0;a<this.name.length;a++){
      if(this.name[a].id != this.name[sid].id){
        var data = {
          id: id,
          name: this.name[a].name,
          content: this.name[a].content
        };
        name1.push(data);
        id++;
      } 
    }
    this.name = name1;
  }

  //Add
  addModal(){
    let id = this.name.length;
    const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false
    };
    var myModalData = {
      id: id
    };
    const myModal: Modal = this.modal.create('ModalPage', { data: myModalData }, myModalOptions);
    myModal.present();

    myModal.onWillDismiss((data) => {
      if(data){
      	console.log('Add');
        this.name.push(data);
      }
    });
  }

  //Update
  updateModal(id){
    const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false
    };
    var myModalData = {
      id: id,
      name: this.name[id].name,
      content: this.name[id].content
    };
    const myModal: Modal = this.modal.create('ModalPage', { data: myModalData }, myModalOptions);
    myModal.present(); 
    myModal.onWillDismiss((data) => {
      if(data){
        for(var a = 0;a<this.name.length;a++){
          if(this.name[a].id == data.id){
            this.name[a].id = data.id;
            this.name[a].name = data.name;
            this.name[a].content = data.content;
          }
        }
      }
    });
  }
}

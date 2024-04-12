import { Component } from '@angular/core';
import { rejects } from 'assert';
import { resolve } from 'path';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Merida';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient():void{
    this.name = 'Melissa';
    this.gender = 'female';
  }

  // i18nPlural
  public clients: string[] = ['Maria','Pedro','Fernando','Gabriel','Eduardo','Melissa','Natalia'];
  public clientsMap={
    '=0': ' no hay clientes esperando',
    '=1': ' tenemos un cliente esperando',
    '=2': ' tenemos 2 esperando',
    'other': ' tenemos # clientes esperando',
  }

  deleteClient():void{
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'Merida',
    age: 34,
    address: 'CDMX'
  }

  //Async Pipe
  // public myObservableTimer:Observable<number> = interval(2000).pipe(
  //   tap( value => console.log('tap: ', value))
  // );

public promiseValue = new Promise<string>((resolve, reject) =>{
  setTimeout(()=>{
    resolve('Tenemos data en la promesa.');
    console.log('Tenemos data en la promesa.');
  },3500)
})

}

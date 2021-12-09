import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Cripto } from '../models/cripto';

@Injectable({
  providedIn: 'root'
})
export class CriptoService {
  private criptoRef: AngularFirestoreCollection;
  constructor(private firestore: AngularFirestore) {
    this.criptoRef = firestore.collection('cripto');;
  }
  public addCripto(cripto:Cripto):Promise<any>{
    return this.criptoRef.add({...cripto});
  }
  public getCripto():Observable<Cripto[]>{
    return this.criptoRef.valueChanges() as Observable<Cripto[]>;
  }
}

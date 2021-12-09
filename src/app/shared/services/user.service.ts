import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Cripto } from '../models/cripto';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersRef: AngularFirestoreCollection;
  constructor(private firestore: AngularFirestore) {
    this.usersRef = firestore.collection('users');;
  }
  public addUser(user:User):Promise<any>{
    return this.usersRef.add({...user});
  }
  public getUsers():Observable<User[]>{
    return this.usersRef.valueChanges() as Observable<User[]>;
  }
  public getUsersWithID(): Observable<any> {
    return this.usersRef.get();
  }
  public updateCriptoUser(idUser:string,cripto:Cripto[]):  Promise<any> {
    return this.usersRef.doc(idUser).update({
      vende: cripto
    });
  }
  public updateEnable(idUser:string,enable:boolean):  Promise<any> {
    return this.usersRef.doc(idUser).update({
      habilitado: enable
    });
  }
  public updateCompra(idUser:string,compra:Cripto[]):  Promise<any> {
    return this.usersRef.doc(idUser).update({
      compra: compra
    });
  }
}

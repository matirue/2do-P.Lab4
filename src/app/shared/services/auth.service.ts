import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLoged:boolean = false;
  public type:string = '';
  constructor(private auth: AngularFireAuth) { }

  public register(user:User):Promise<any>{
    return this.auth.createUserWithEmailAndPassword(user.email, user.password);
  }
  public login(user:User):Promise<any>{
    return this.auth.signInWithEmailAndPassword(user.email, user.password);
  }
  public logout():Promise<any>{
    return this.auth.signOut();
  }
}

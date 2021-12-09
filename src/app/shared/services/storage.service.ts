import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(private storage: AngularFireStorage) { }

  uploadFile(file: File, filePath:string): AngularFireUploadTask {
    // const ref = this.storage.ref(filePath);
    // return ref.put(file);
    return this.storage.upload(filePath, file);
  }
  downloadFile(filePath: string): Observable<any> {
    const ref = this.storage.ref(filePath);
    return ref.getDownloadURL();
  }
}

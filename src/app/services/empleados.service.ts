import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  // getEmpleados() {
  //   throw new Error('Method not implemented.');
  // }
  // getEmpleados() {
  //   throw new Error('Method not implemented.');
  // }

  constructor(private firestore: AngularFirestore) {

  }
  agregarEmpleado(empleado: any) : Promise<any>{
    return this.firestore.collection('items').add(empleado);

  }
  getEmpleados(): Observable<any>{
    //return this.firestore.collection('items').snapshotChanges();
    // const p=this.firestore.collection('empleados', ref =>ref.orderBy('fechaCreacion','asc')).snapshotChanges();
    //   console.log(p)
    //   return p
       return this.firestore.collection('items', ref =>ref.orderBy('fechaCreacion','asc')).snapshotChanges();
   }
  getEmpleado(id: string): Observable<any>{
    return this.firestore.collection('items').doc(id).snapshotChanges();
 }
 actualizarEmpleado(id:string, data:any): Promise<any>{
   return this.firestore.collection('items').doc(id).update(data);
 }
eliminarEmpleado(id: string): Promise<any>{
     return this.firestore.collection('items').doc(id).delete();
 }
}


import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';
import { EmpleadosService } from 'src/app/services/empleados.service';
 //import { AngularFirestore } from '@angular/fire/compat/firestore';
// import { AngularFirestore } from '@angular/fire/compat/firestore';
// import { Observable } from 'rxjs';
//// import { Observable } from 'rxjs';
// import { AngularFirestore } from '@angular/fire/compat/firestore';
//import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {
  //// items: Observable<any[]> | undefined;
  //items: any[] = [];
  // property: any;
  // empleados: any[] = [];
    empleados: any[] = [];
 // private _empleadosService: any;

    constructor(private _empleadoService: EmpleadosService) {
  //// constructor(firestore: AngularFirestore,private _empleadoService: EmpleadosService) {
  ////   this.items = firestore.collection('items').valueChanges();
  }

  ngOnInit(): void {
        this.getEmpleados();
  }
  // getEmpleados(){
  //   this._empleadoService.getEmpleados().subscribe(data =>{
  //     this.empleados = [],
  //     data.forEach((element: any) =>{
  //       this.empleados.push({
  //         id: element.papyload.doc.id,
  //         ...element.payload.doc.data()
  //       })
  //     });
  //     console.log(this.empleados)
  //   });
  getEmpleados(){
    this._empleadoService.getEmpleados().subscribe(data =>{
      this.empleados =[];
      // console.log(data);

  //     this.empleados = [];
       data.forEach((element:any) =>{
        // console.log(element.payload.doc.data());
        this.empleados.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
       console.log(this.empleados);
    });


  }
  eliminarEmpleado(id: string){
    this._empleadoService.eliminarEmpleado(id).then(() =>{
      console.log('Empleado eliminado con exito');
    }).catch(error  =>{
      console.log(error);
    })

  }
}



import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadosService } from 'src/app/services/empleados.service';



@Component({
  selector: 'app-crear-empleados',
  templateUrl: './crear-empleados.component.html',
  styleUrls: ['./crear-empleados.component.css']
})
export class CrearEmpleadosComponent implements OnInit {
  crearEmpleado: FormGroup;
  submitted = false;
  id: string | null;
  titulo = 'AGREGAR ARTICULO';
  loading=false;


  constructor(private fb: FormBuilder, private empleadosService: EmpleadosService,private router:Router, private aRoute: ActivatedRoute) {
    this.crearEmpleado = this.fb.group({
      nombre: ['',  Validators.required],
      apellido: ['',Validators.required],
      dni: ['',Validators.required],
      salario: ['',Validators.required],

      //this.id = this.aRoute.snapshot.paramMap.get('id');


    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
    console.log(this.id)
  }

  ngOnInit(): void {
    this.edit();
  }

  agregarEmpleado() {

    const empleado: any={
      nombre: this.crearEmpleado.value.nombre,
      apellido: this.crearEmpleado.value.apellido,
      dni: this.crearEmpleado.value.dni,
      salario: this.crearEmpleado.value.salario,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date()


    }
    console.log(empleado);
    // console.log(this.crearEmpleado);
    this.loading=true;
    this.empleadosService.agregarEmpleado(empleado).then(()=>{
      console.log("Cargado con exito");
      this.router.navigate(['/lista']);

    }).catch(error =>{
      console.log(error);
    });


  }
  agregarEditarEmpleado(){
    // console.log(this.crearEmpleado);
    this.submitted = true;
    if(this.crearEmpleado.invalid){
      return;
    }
    if(this.id ===null){
      this.agregarEmpleado();
    }else{
      this.editarEmpleado(this.id);

    }
    //  console.log(this.crearEmpleado);
  }

  editarEmpleado(id: string){
    const empleado: any={
      nombre: this.crearEmpleado.value.nombre,
      apellido: this.crearEmpleado.value.apellido,
      dni: this.crearEmpleado.value.dni,
      salario: this.crearEmpleado.value.salario,
      // fechaCreacion: new Date(),
      fechaActualizacion: new Date()


    }
    this.loading=true;
    this.empleadosService.actualizarEmpleado(id, empleado).then(()=>{
      this.loading=false;


    })
    this.router.navigate(['/lista']);
  }
  edit(){
    this.titulo='EDITAR ARTICULO'
    if(this.id !== null){
      this.loading=true;
      this.empleadosService.getEmpleado(this.id).subscribe(data =>{
        this.loading=false;
        console.log(data.payload.data()['nombre']);
        this.crearEmpleado.setValue({
          nombre: data.payload.data()['nombre'],
          apellido: data.payload.data()['apellido'],
          dni: data.payload.data()['dni'],
          salario: data.payload.data()['salario'],


        })
      })
    }


    }
  }



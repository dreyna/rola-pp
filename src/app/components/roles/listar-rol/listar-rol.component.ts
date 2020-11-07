import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rol } from 'src/app/models/rol';
import { RolService } from 'src/app/services/rol.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-listar-rol',
  templateUrl: './listar-rol.component.html',
  styleUrls: ['./listar-rol.component.css']
})
export class ListarRolComponent implements OnInit {
  roles:any;
  constructor(private rolService:RolService, private router: Router) { }
  ngOnInit(): void {
    this.listar();
  }
  delRol(num:number):void{
    this.rolService.deleteRol(num).subscribe(
      response=>{
        Swal.fire({
          title: 'Estas seguro?',
          text: "No podras reverti esto!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            this.listar()
            Swal.fire(
              'Eliminado!',
              'El registro ha sido eliminado.',
              'success'
            )
          }
        })
      }
    )    
  }
  listar():void{
    this.rolService.getRoles().subscribe(
      (data)=>{
        this.roles = data['cursor_roles'];
      }
    ) 
  }
}

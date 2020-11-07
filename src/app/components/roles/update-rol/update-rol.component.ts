import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Rol } from 'src/app/models/rol';
import { RolService } from 'src/app/services/rol.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-update-rol',
  templateUrl: './update-rol.component.html',
  styleUrls: ['./update-rol.component.css']
})
export class UpdateRolComponent implements OnInit {
  roles: any;  
  rol:Rol=new Rol();
  constructor(private rolService:RolService,
    private router: Router, private activatedRoute:ActivatedRoute) { }
  ngOnInit(): void {
    this.cargarRol();
  }
cargarRol():void{
  this.activatedRoute.params.subscribe(params=>{
    let id = params['id']
    if(id){
      this.rolService.getRol(id).subscribe(
        (data)=>{
        this.roles=data['cursor_roles'] 
        this.rol.nomrol=this.roles[0].NOMROL;
        this.rol.id_rol=this.roles[0].ID_ROL;
      })
    }
  })
}
modificarRol():void{
  this.rolService.updateRol(this.rol).subscribe(
    response=>{
      swal.fire({
        title: 'Estas seguro?',
        text: "No podras revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, update it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/listar'])
          swal.fire(
            'Actualizado!',
            'El registro ha sido Modificado.',
            'success'
          )
        }
      })    
  })
}
}

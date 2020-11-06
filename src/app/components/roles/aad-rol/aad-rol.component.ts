import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute} from '@angular/router';
import { Rol } from 'src/app/models/rol';
import { RolService } from 'src/app/services/rol.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-aad-rol',
  templateUrl: './aad-rol.component.html',
  styleUrls: ['./aad-rol.component.css']
})
export class AadRolComponent implements OnInit {
  rolModel:Rol = new Rol();
  constructor(private rolService:RolService,
    private router: Router, private activatedRoute:ActivatedRoute) { }
  
  ngOnInit(): void {}  
  
  public create():void{       
      this.rolService.addRol(this.rolModel).subscribe(
        response=>{this.router.navigate(['/listar'])
        swal.fire('Nuevo Rol', `Rol ${this.rolModel.nomrol} creado con exito`,"success")      
      })
     
  }
}

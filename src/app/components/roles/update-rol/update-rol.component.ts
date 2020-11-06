import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Rol } from 'src/app/models/rol';
import { RolService } from 'src/app/services/rol.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-update-rol',
  templateUrl: './update-rol.component.html',
  styleUrls: ['./update-rol.component.css']
})
export class UpdateRolComponent implements OnInit {
  rol:Rol[];
  constructor(private rolService:RolService,
    private router: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarRol();
  }
cargarRol():void{
  this.activatedRoute.params.subscribe(params=>{
    let id = params['id']
    alert(id);
    if(id){
      this.rolService.getRol(id).subscribe((rol)=>this.rol=rol)
    }
  })
}
}

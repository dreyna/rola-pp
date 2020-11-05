import { Component, OnInit } from '@angular/core';
import { Rol } from 'src/app/models/rol';
import { RolService } from 'src/app/services/rol.service';

@Component({
  selector: 'app-listar-rol',
  templateUrl: './listar-rol.component.html',
  styleUrls: ['./listar-rol.component.css']
})
export class ListarRolComponent implements OnInit {
  roles:Rol[];
  constructor(private rolService:RolService) { }

  ngOnInit(): void {
    this.rolService.getRoles().subscribe(
      (data)=>{
        this.roles = data['cursor_roles'];
      }
    ) 
  }
  delRol(num:number):void{
    alert(num);
  }
}

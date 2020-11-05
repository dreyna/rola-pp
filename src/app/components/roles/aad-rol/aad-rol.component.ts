import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Rol } from 'src/app/models/rol';
import { RolService } from 'src/app/services/rol.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-aad-rol',
  templateUrl: './aad-rol.component.html',
  styleUrls: ['./aad-rol.component.css']
})
export class AadRolComponent implements OnInit {

  constructor(private rolService:RolService,private router: Router) { }

  ngOnInit(): void {
  }
  rolModel:Rol = new Rol();
  onSubmit(){

  }
  public create():void{
      this.rolService.addRol(this.rolModel).subscribe(
        response=>this.router.navigate(['/rol'])
      )
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { ListarRolComponent } from './components/roles/listar-rol/listar-rol.component';
import { AadRolComponent } from './components/roles/aad-rol/aad-rol.component';
import { UpdateRolComponent } from './components/roles/update-rol/update-rol.component';
import { MatIconModule } from '@angular/material/icon';
import { RolService } from './services/rol.service';
import {HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {AppRoutingModule} from './app-routing.module';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    ListarRolComponent,
    AadRolComponent,
    UpdateRolComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatTableModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [
    RolService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from 'src/app/model/persona';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-persona',
  templateUrl: './registro-persona.component.html',
  styleUrls: ['./registro-persona.component.css']
})
export class RegistroPersonaComponent implements OnInit {

  private persona: Persona = new Persona();
  constructor(private personaService: PersonaService, private router: Router) { }

  ngOnInit() {
  }
  savePersona() {
    this.personaService.createPersona(this.persona).subscribe(
      _ => this.router.navigate(['/listar'])
      );
  }
}

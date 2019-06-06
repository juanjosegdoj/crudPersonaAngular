import { Component, OnInit } from '@angular/core';
import { Persona } from '../../model/persona';
import { PersonaService } from '../../services/persona.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  personas: Persona[] = [];
  personaSeleccionada = new Persona();
  constructor(private personaService: PersonaService, private router: Router) { }
  private idOldPersona: number;


  ngOnInit() {
    this.personaService.listAll().subscribe(
      (personas) => {
        this.personas = personas;
      }
    );
  }
  showPopup(persona: Persona) {
    this.personaSeleccionada = persona;
  }

  delete(personaSeleccionada: Persona) {
    this.personaService.delete(personaSeleccionada.id).subscribe(
      _ => {
        this.personas = this.personas.filter(persona => persona !== personaSeleccionada);
      }
      );
    }

    update() {
      this.personaService.updatePersona(this.personaSeleccionada).subscribe(
        _ => this.router.navigate(['listar'])
      );
  }
}

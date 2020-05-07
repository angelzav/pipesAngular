import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  nombre: string = "Lorem Ipsum";
  nombre2: string = "AnGel faUStiNo ZaVaLa";
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI: number = Math.PI;
  porsentaje: number = 0.235;
  salario: number = 26497.5;

  heroe = {
    nombre: "Logan",
    clave: "Wolverine",
    edad: 500,
    direccion: {
      calle: "Calle siempre viva",
      numero: 20,
    },
  };

  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("llego la data");
    }, 4500);
  });

  fecha: string | Date = new Date();

  idioma: string = "es";

  videoURL: string = "https://www.youtube.com/embed/Nj-36jra4mQ";

  mascara:boolean = true;

  title = "pipes";
}

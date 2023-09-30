import { Autor } from "../Entities/Autor";

export interface AutorServiceInterface {
    agregarAutor(nombre: string, fechaNacimiento: Date): Autor;
    obtenerAutor(id: number): Autor | undefined;
}
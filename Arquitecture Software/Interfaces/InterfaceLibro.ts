import { Libro } from "../Entities/Libro";

export interface LibroServiceInterface {
    agregarLibro(titulo: string, autorId: number): Libro;
    obtenerLibro(id: number): Libro | undefined;
}
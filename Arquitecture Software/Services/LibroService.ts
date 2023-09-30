import { Libro } from "../Entities/Libro";
import { LibroServiceInterface } from "../Interfaces/InterfaceLibro";
import { LibroRepository } from "../Repositories/LibroRepository";
import { AutorService } from "./AutorService";


export class LibroService implements LibroServiceInterface {
    constructor(private libroRepository: LibroRepository, private autorService: AutorService) {}

    agregarLibro(titulo: string, autorId: number): Libro {
        const autor = this.autorService.obtenerAutor(autorId);
        if (!autor) throw new Error("Autor no encontrado.");

        const libro = new Libro(Date.now(), titulo, autor);
        this.libroRepository.agregar(libro);
        return libro;
    }

    obtenerLibro(id: number): Libro | undefined {
        return this.libroRepository.obtenerPorId(id);
    }
}

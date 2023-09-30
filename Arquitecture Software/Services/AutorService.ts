import { Autor } from "../Entities/Autor";
import { AutorRepository } from "../Repositories/AutorRepository";
import { AutorServiceInterface } from "../Interfaces/InterfaceAutor";

export class AutorService implements AutorServiceInterface{
    constructor(private autorRepository: AutorRepository) {}

    agregarAutor(nombre: string, fechaNacimiento: Date): Autor {
        const autor = new Autor(Date.now(), nombre, fechaNacimiento);
        this.autorRepository.agregar(autor);
        return autor;
    }

    obtenerAutor(id: number): Autor | undefined {
        return this.autorRepository.obtenerPorId(id);
    }
}

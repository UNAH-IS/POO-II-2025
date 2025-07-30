export interface Usuario {
    id: number;
    nombre?: string;
    imagenPerfil: string;
    coronas: number;
    vidas: number;
    resultados: Array<Resultado>; //Arreglo de ressultados
}

export interface Resultado {
    category: number;
    correctas: number;
    incorrectas: number;
    aprobada: boolean;
}

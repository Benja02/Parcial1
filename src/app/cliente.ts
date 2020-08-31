export class Cliente {
    
        constructor(
        public id: number,
        public nombre: string,
        public dui: number,
        public nombremasco: string,
        public tratamiento: string,
        public medicamento: string,
        public costo: number,
        public visita: number,
        public total:number,
        public descuento:number
        ) {}
        
}

export class Produkt {

    constructor(
        public id: string,
        public name: string,
        public description: string,
        public descriptionFull: string,
        public price: number,
        public available: number,
        public img?: string,
        public featured?: boolean
    ) { }
}

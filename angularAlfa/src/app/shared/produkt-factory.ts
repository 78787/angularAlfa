import { Produkt } from './produkt';
import { ProduktRaw } from './produkt-raw';

export class ProduktFactory {
    static empty(): Produkt {
        return new Produkt('', '', '', '', 0, 0, '', false);
    }

    static fromObject(rawProdukt: ProduktRaw | any): Produkt {
        return new Produkt(
            rawProdukt.id,
            rawProdukt.name,
            rawProdukt.description,
            rawProdukt.descriptionFull,
            rawProdukt.price,
            rawProdukt.available,
            rawProdukt.img,
            rawProdukt.featured,

        );
    }
}

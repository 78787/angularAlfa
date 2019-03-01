export class ErrorMessageLeistung {
    constructor(
        public forControl: string,
        public forValidator: string,
        public text: string
    ) { }
}

export const LeistungFormErrorMessages = [
    new ErrorMessageLeistung('name', 'required', 'Ein Produktname muss angegeben werden'),
    new ErrorMessageLeistung('id', 'required', 'Es muss ein ID angegeben werden'),
    new ErrorMessageLeistung('id', 'minlength', 'Die ID muss mindestens 2 Zeichen enthalten'),
    new ErrorMessageLeistung('id', 'maxlength', 'Eine ID darf höchstens 5 Zeichen haben'),
    new ErrorMessageLeistung('description', 'required', 'Es muss etwas angegeben werden'),
    new ErrorMessageLeistung('descriptionFull', 'required', 'Es muss etwas angegeben werden')
];



export class ErrorMessage {
  constructor(
    public forControl: string,
    public forValidator: string,
    public text: string
  ) { }
}
export const ProduktFormErrorMessages = [
  new ErrorMessage('name', 'required', 'Ein Produktname muss angegeben werden'),
  new ErrorMessage('id', 'required', 'Es muss ein ID angegeben werden'),
  new ErrorMessage('id', 'minlength', 'Die ID muss mindestens 2 Zeichen enthalten'),
  new ErrorMessage('id', 'maxlength', 'Eine ID darf höchstens 6 Zeichen haben'),
  new ErrorMessage('description', 'required', 'Es muss etwas angegeben werden'),
  new ErrorMessage('descriptionFull', 'required', 'Es muss etwas angegeben werden')
];

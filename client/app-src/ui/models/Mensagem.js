export class Mensagem{
    constructor(texto = ''){ //posso colocar um valor padrão igual ao python
        // if(!texto){
        //     this._texto = '';
        // }
        this._texto = texto || ''; // || significa valor padrão, ou seja, não preciso atribuir um if para quando não há texto no constructor

    }

    get texto(){
        return this._texto;
    }
    set texto(texto){
        this._texto = texto;
    }
}
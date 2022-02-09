import{View} from'./View.js';
import{DateConverter} from '../converters/DateConverter.js';

export class NegociacaoView extends View{
    constructor(elemento){
        super(elemento);
    }

    template(model){
        return `
        <table class="table	table-hover	table-bordered">
            <thead>
                <tr>
                    <th onclick="NegociacaoController.ordena('data')">DATA</th>
                    <th onclick="NegociacaoController.ordena('quantidade')">QUANTIDADE</th>
                    <th onclick="NegociacaoController.ordena('valor')">VALOR</th>
                    <th onclick="NegociacaoController.ordena('volume')">VOLUME</th>
                </tr>
            </thead>

            <tbody>
                ${model.paraArray().map(negociacao => 
                    `
                    <tr>
                        <td>${DateConverter.paraTexto(negociacao.data)}</td>
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor}</td>
                        <td>${negociacao.volume}</td>
                    </tr>																								
                    `
                ).join('')}
            </tbody>

            <tfoot>
                    <tr>
                        <td colspan = 3></td>
                        <td>${model.volumeTotal}</td>
                    </tr>
            </tfoot>

        </table>
        `
    }
}
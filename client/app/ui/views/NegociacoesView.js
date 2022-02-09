System.register(['./View.js', '../converters/DateConverter.js'], function (_export, _context) {
    "use strict";

    var View, DateConverter;
    return {
        setters: [function (_ViewJs) {
            View = _ViewJs.View;
        }, function (_convertersDateConverterJs) {
            DateConverter = _convertersDateConverterJs.DateConverter;
        }],
        execute: function () {
            let NegociacaoView = class NegociacaoView extends View {
                constructor(elemento) {
                    super(elemento);
                }

                template(model) {
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
                ${model.paraArray().map(negociacao => `
                    <tr>
                        <td>${DateConverter.paraTexto(negociacao.data)}</td>
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor}</td>
                        <td>${negociacao.volume}</td>
                    </tr>																								
                    `).join('')}
            </tbody>

            <tfoot>
                    <tr>
                        <td colspan = 3></td>
                        <td>${model.volumeTotal}</td>
                    </tr>
            </tfoot>

        </table>
        `;
                }
            };

            _export('NegociacaoView', NegociacaoView);
        }
    };
});
//# sourceMappingURL=NegociacoesView.js.map
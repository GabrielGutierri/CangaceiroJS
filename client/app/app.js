System.register(['./controllers/NegociacaoController.js', './domain/index.js'], function (_export, _context) {
    "use strict";

    var NegociacaoController, Negociacao;
    return {
        setters: [function (_controllersNegociacaoControllerJs) {
            NegociacaoController = _controllersNegociacaoControllerJs.NegociacaoController;
        }, function (_domainIndexJs) {
            Negociacao = _domainIndexJs.Negociacao;
        }],
        execute: function () {
            const controller = new NegociacaoController();

            const negociacao = new Negociacao(new Date(), 1, 20);
            const headers = new Headers();
            headers.set('Content-Type', 'application/json');

            const method = 'POST';
            const config = {
                method,
                headers
            };

            fetch('/negociacoes', config).then(() => console.log('Dado enviado'));
        }
    };
});
//# sourceMappingURL=app.js.map
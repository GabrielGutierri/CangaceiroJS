System.register([], function (_export, _context) {
    "use strict";

    return {
        setters: [],
        execute: function () {
            let ArquivoController = class ArquivoController {

                constructor() {
                    this._inputDados = document.querySelector('.dados-arquivo');
                }

                envia() {
                    //cria um Arquivo com as suas propriedades;

                    // exibe mensagem no console com os dados do arquivo.
                    let nomes = this._inputDados.value.split('/').map(item => item.toUpperCase());
                    let arquivo = new Arquivo(...nomes);

                    console.log(`${arquivo.nome} - ${arquivo.tamanho} - ${arquivo.tipo}`);
                    this._limpaFormulario();
                }

                _limpaFormulario() {
                    this._inputDados.value = '';
                    this._inputDados.focus();
                }
            };
        }
    };
});
//# sourceMappingURL=exCursoController.js.map
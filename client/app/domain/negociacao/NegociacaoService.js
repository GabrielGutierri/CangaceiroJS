System.register(['../../util/HttpService.js', './Negociacao.js', '../../ui/converters/ApplicationException.js'], function (_export, _context) {
    "use strict";

    var HttpService, Negociacao, ApplicationException;
    return {
        setters: [function (_utilHttpServiceJs) {
            HttpService = _utilHttpServiceJs.HttpService;
        }, function (_NegociacaoJs) {
            Negociacao = _NegociacaoJs.Negociacao;
        }, function (_uiConvertersApplicationExceptionJs) {
            ApplicationException = _uiConvertersApplicationExceptionJs.ApplicationException;
        }],
        execute: function () {
            function _asyncToGenerator(fn) {
                return function () {
                    var gen = fn.apply(this, arguments);
                    return new Promise(function (resolve, reject) {
                        function step(key, arg) {
                            try {
                                var info = gen[key](arg);
                                var value = info.value;
                            } catch (error) {
                                reject(error);
                                return;
                            }

                            if (info.done) {
                                resolve(value);
                            } else {
                                return Promise.resolve(value).then(function (value) {
                                    step("next", value);
                                }, function (err) {
                                    step("throw", err);
                                });
                            }
                        }

                        return step("next");
                    });
                };
            }

            let NegociacaoService = class NegociacaoService {

                constructor() {
                    this._http = new HttpService();
                }
                obterNegociacoesDaSemana() {
                    return this._http.get('negociacoes/semana').then(dados => {
                        const negociacoes = dados.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor));
                        return negociacoes;
                    }, err => {
                        throw new ApplicationException("Não foi possível obter as negociações da semana");
                    });
                }

                obterNegociacoesDaSemanaAnterior() {
                    return this._http.get('negociacoes/anterior').then(dados => {
                        const negociacoes = dados.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor));
                        return negociacoes;
                    }, err => {
                        throw new ApplicationException("Não foi possível obter as negociações da semana anterior");
                    });
                }

                obterNegociacoesDaSemanaRetrasada() {
                    return this._http.get('negociacoes/retrasada').then(dados => {
                        const negociacoes = dados.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor));
                        return negociacoes;
                    }, err => {
                        throw new ApplicationException("Não foi possível obter as negociações da semana retrasada");
                    });
                }

                obterNegociacoesDoPeriodo() {
                    var _this = this;

                    return _asyncToGenerator(function* () {
                        try {
                            let periodo = yield Promise.all([_this.obterNegociacoesDaSemana(), _this.obterNegociacoesDaSemanaAnterior(), _this.obterNegociacoesDaSemanaRetrasada()]);
                            return periodo.reduce(function (novoArray, item) {
                                return novoArray.concat(item);
                            }, []).sort(function (a, b) {
                                return b.data.getTime() - a.data.getTime();
                            });
                        } catch (err) {
                            console.log(err);
                            throw new ApplicationException("Não foi possível obter as negociações do período");
                        };
                    })();
                }

            };

            _export('NegociacaoService', NegociacaoService);
        }
    };
});
//# sourceMappingURL=NegociacaoService.js.map
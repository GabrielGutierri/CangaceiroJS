System.register([], function (_export, _context) {
    "use strict";

    return {
        setters: [],
        execute: function () {
            let ProxyFactory = class ProxyFactory {
                static create(objeto, props, armadilha) {
                    //console.log(props); -> props = métodos do Negociacoes e Mensagem
                    //console.log(objeto); -> objeto = Negociacoes e Mensagem
                    console.log(armadilha); //-> armadilha = model;
                    return new Proxy(objeto, {
                        get(target, prop, receiver) {
                            //target -> array de negociacoes (negociacoes[negociacao])
                            //target[prop] -> metodo que a minha negociacao chama (Adiciona, esvazia, inverteOrdem e paraArray)
                            //prop -> metodo que esta sendo chamado.

                            //se o prop é uma função do meu objeto (Negociacoes) e está nos props que eu passei
                            if (ProxyFactory._ehFuncao(target[prop]) && props.includes(prop)) {
                                return function () {
                                    console.log(`${prop} disparou a armadilha`);
                                    target[prop].apply(target, arguments); //vou pegar minha negociacao e rodar o metodo do prop

                                    armadilha(target);
                                };
                            } else {
                                return target[prop];
                            }
                        },
                        set(target, prop, value, receiver) {
                            const updated = Reflect.set(target, prop, value);
                            if (props.includes(prop)) armadilha(target);
                            return updated;
                        }
                    });
                }

                static _ehFuncao(fn) {
                    return typeof fn == typeof Function;
                }
            };

            _export("ProxyFactory", ProxyFactory);
        }
    };
});
//# sourceMappingURL=ProxyFactory.js.map
System.register([], function (_export, _context) {
    "use strict";

    return {
        setters: [],
        execute: function () {
            let ContaPoupanca = class ContaPoupanca extends Conta {
                atualiza(taxa) {
                    this._saldo += taxa * 2;
                }
            };
        }
    };
});
//# sourceMappingURL=ContaPoupanca.js.map
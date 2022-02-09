System.register([], function (_export, _context) {
    "use strict";

    return {
        setters: [],
        execute: function () {
            let ContaCorrente = class ContaCorrente extends Conta {
                atualiza(taxa) {
                    this._saldo += taxa;
                }
            };
        }
    };
});
//# sourceMappingURL=ContaCorrente.js.map
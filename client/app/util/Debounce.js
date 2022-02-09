System.register([], function (_export, _context) {
    "use strict";

    function debounce(fn, milissegundos) {
        return () => {
            setTimeout(() => fn(), milissegundos);
        };
    }

    _export("debounce", debounce);

    return {
        setters: [],
        execute: function () {}
    };
});
//# sourceMappingURL=Debounce.js.map
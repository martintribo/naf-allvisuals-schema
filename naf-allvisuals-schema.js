// TODO: Require NAF as a dependency?

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.returnExports = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {
    const template = document.createElement('script');
    template.setAttribute('naf-allvisuals-schema');
    template.setAttribute('type', 'text/html');
    document.head.appendChild(template);
    NAF.schemas.add({
        template: '#naf-allvisuals-schema',
        components: [
            'position',
            'rotation',
            'scale',
            'collada-model',
            'geometry',
            'gltf-model',
            'light',
            'line',
            'material',
            'obj-model',
            'shadow',
            'sound',
            'text',
            'visible'
        ]
    });
    // No export, template and schema are added to the DOM and NAF directly.
    return {};
}));
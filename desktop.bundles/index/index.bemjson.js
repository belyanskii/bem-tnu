({
    block: 'page',
    title: 'БЭМ-ТНУ',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: '_index.css' }
    ],
    scripts: [
        { elem: 'js', url: '_index.js' }
    ],
    content: [
        'При нажатии на кнопку берем текст из инпута и вставляем в контент',
        'При нажатии на кнопку берем текст и добавляем его в контент',
        'При нажатии на кнопку берем текст и добавляем его в контент + меняем бэкграунд'
    ].map(function (title, i) {
        var modBlock;

        i == 1 && (modBlock = { theme: 'bright' });
        i == 2 && (modBlock = { type: 'add' });

        return {
            block: 'burum',
            mods: modBlock,
            content: [
                {
                    elem: 'title',
                    content: title
                },
                {
                    block: 'input',
                    mods: { theme: 'normal', size: 'xl', 'has-clear': true, autofocus: true },
                    mix: [
                        { block: 'burum', elem: 'past' }
                    ]
                },
                {
                    block: 'button',
                    mods: { theme: 'normal', size: 'xl' },
                    mix: [
                        { block: 'burum', elem: 'put' }
                    ],
                    text: 'simple'
                },
                {
                    elem: 'content'
                }
            ]};
        })

})

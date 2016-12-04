suite('"About" page tests', function () {
    test('страница должна содержать ссылку на страницу контактов', function () {
        assert($('a[href="/contact"]').length);
    });
});
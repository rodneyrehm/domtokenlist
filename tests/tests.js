test('Add single token', function () {
    var list = new DOMTokenList2();

    list.add('token-1');

    deepEqual(list.tokens, ['token-1'], 'Assert that tokens is "token-1".');
});

test('Add multiple tokenes', function () {
    var list = new DOMTokenList2();

    list.add('token-1', 'token-2');

    deepEqual(list.tokens, ['token-1', 'token-2'], 'Assert that tokens is "token-1" and "token-2".');
});

test('Just add token once', function () {
    var list = new DOMTokenList2();

    list.add('token-1');
    list.add('token-1');

    deepEqual(list.tokens, ['token-1'], 'Assert that token was only added once.');
});

test('Just add token once', function () {
    var list = new DOMTokenList2();

    list.add('token-1');
    list.add('token-1');

    deepEqual(list.tokens, ['token-1'], 'Assert that token was only added once.');
});

test('Check contains with a single token', function () {
    var list = new DOMTokenList2();

    list.add('token-1');

    ok(list.contains('token-1'), 'Assert that list contains token "token-1".');
});

test('Check contains with multiple tokens', function () {
    var list = new DOMTokenList2();

    list.add('token-1');
    list.add('token-2');

    ok(list.contains('token-1'), 'Assert that list contains token "token-1".');
});

test('Check contains with non existing token', function () {
    var list = new DOMTokenList2();

    list.add('token-1');

    equal(list.contains('token-2'), false, 'Assert that list does not contains token "token-2".');
});

test('Check contains with non existing tokens', function () {
    var list = new DOMTokenList2();

    list.add('token-1');
    list.add('token-2');

    equal(list.contains('token-3'), false, 'Assert that list does not contains token "token-3".');
});

test('Get item at index', function () {
    var list = new DOMTokenList2();

    list.add('token-1');
    list.add('token-2');

    equal(list.item(1), 'token-2', 'Assert that "token-2" is at index 1.');
});

test('Get item at non existing index', function () {
    var list = new DOMTokenList2();

    list.add('token-1');

    equal(list.item(1), null, 'Assert that item() gives null for non existing token.');
});

test('Remove single token', function () {
    var list = new DOMTokenList2();

    list.add('token-1');
    list.add('token-2');

    list.remove('token-2');

    deepEqual(list.tokens, ['token-1'], 'Assert that "token-2" was removed.');
});

test('Remove multiple tokens', function () {
    var list = new DOMTokenList2();

    list.add('token-1');
    list.add('token-2');

    list.remove('token-1', 'token-2');

    deepEqual(list.tokens, [], 'Assert that "token-1" and "token-2" was removed.');
});

test('Toggle addition of token', function () {
    var list = new DOMTokenList2();

    list.toggle('token-1');

    deepEqual(list.tokens, ['token-1'], 'Assert that tokens is "token-1".');
});

test('Toggle removal of token', function () {
    var list = new DOMTokenList2();

    list.add('token-1');
    list.toggle('token-1');

    deepEqual(list.tokens, [], 'Assert that tokens is empty.');
});

test('Toggle removal of token', function () {
    var list = new DOMTokenList2();

    list.add('token-1');
    list.toggle('token-1');

    deepEqual(list.tokens, [], 'Assert that tokens is empty.');
});

test('Toggle removal of token', function () {
    var list = new DOMTokenList2();

    list.add('token-1');
    list.toggle('token-1');

    deepEqual(list.tokens, [], 'Assert that tokens is empty.');
});

test('Test toggle force with filled token list', function () {
    var list = new DOMTokenList2();

    list.add('token-1');

    equal(list.toggle('token-1', false), false, 'Assert that toggle returns false.');
});

test('Test toggle force = true with empty token list', function () {
    var list = new DOMTokenList2();

    ok(list.toggle('token-1', true), 'Assert that toggle returns true.');
});

test('Test toggle force = false with empty token list', function () {
    var list = new DOMTokenList2();
    var result = list.toggle('token-12', false);

    deepEqual(list.tokens, [], 'Assert that token list is empty');
    equal(result, false, 'Assert that toggle returns false.');
});

test('Test toString()', function () {
    var list = new DOMTokenList2();

    list.add('token-1', 'token-2');

    equal(list.toString(), 'token-1 token-2', 'Assert that tokens are space separated.');
});

test('Disallow illegal token names', function () {
    var list = new DOMTokenList2();

    throws(function () { list.add(''); }, Error, '.add() throws error on empty string.');
    throws(function () { list.add('token name'); }, Error, '.add() throws error on string with spaces.');

    throws(function () { list.contains(''); }, Error, '.contains() throws error on empty string.');
    throws(function () { list.contains('token name'); }, Error, '.contains() throws error on string with spaces.');

    throws(function () { list.remove(''); }, Error, '.remove() throws error on empty string.');
    throws(function () { list.remove('token name'); }, Error, '.remove() throws error on string with spaces.');

    throws(function () { list.toggle(''); }, Error, '.toggle() throws error on empty string.');
    throws(function () { list.toggle('token name'); }, Error, '.toggle() throws error on string with spaces.');
});
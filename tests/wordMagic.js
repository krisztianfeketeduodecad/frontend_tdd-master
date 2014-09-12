var assert = require('chai').assert,

	WordMagic = require('../libs/wordMagic');

suite('wordMagic', function() {
	setup(function() {
		this.wordMagic = new WordMagic();
	});

	test('wordMagic - a', function() {
		assert.deepEqual(this.wordMagic.generateAnagrams('a'), ['a']);
	});

	test('wordMagic - aa', function() {
		assert.deepEqual(this.wordMagic.generateAnagrams('aa'), ['aa']);
	});

	test('wordMagic - aa sameCharacter', function() {
		assert.strictEqual(this.wordMagic.onlyOneCharacter('aa'), true);
	});
	test('wordMagic - ab sameCharacter', function() {
		assert.strictEqual(this.wordMagic.onlyOneCharacter('ab'), false);
	});

	test('wordMagic - ab', function() {
		assert.deepEqual(this.wordMagic.generateAnagrams('ab'), ['ab', 'ba']);
	});

	test('wordMagic - abc', function() {
		assert.deepEqual(this.wordMagic.generateAnagrams('abc').sort(), ['abc', 'acb', 'bac', 'bca', 'cba', 'cab'].sort());
	});

	test('wordMagic - biro', function() {
		assert.deepEqual(this.wordMagic.generateAnagrams('biro').sort(), ['biro', 'bior', 'brio', 'broi', 'boir', 'bori',
			'ibro', 'ibor', 'irbo', 'irob', 'iobr', 'iorb', 'rbio', 'rboi', 'ribo', 'riob', 'roib', 'robi',
			'obir', 'obri', 'oibr', 'oirb', 'orbi', 'orib'].sort());
	});

	test('wordMagic - ooooooooooooooooooooooooooooooooooooooo', function() {
		assert.deepEqual(this.wordMagic.generateAnagrams('ooooooooooooooooooooooooooooooooooooooo').sort(),
			['ooooooooooooooooooooooooooooooooooooooo'].sort());
	});

	test('wordMagic - MirrorWord - o', function() {
		assert.strictEqual(this.wordMagic.isMirrorWord('o'), true);
	});

	test('wordMagic - MirrorWord - oo', function() {
		assert.strictEqual(this.wordMagic.isMirrorWord('oo'), true);
	});

	test('wordMagic - MirrorWord - ooo', function() {
		assert.strictEqual(this.wordMagic.isMirrorWord('ooo'), true);
	});

	test('wordMagic - MirrorWord - aba', function() {
		assert.strictEqual(this.wordMagic.isMirrorWord('aba'), true);
	});

	test('wordMagic - MirrorWord - abba', function() {
		assert.strictEqual(this.wordMagic.isMirrorWord('abba'), true);
	});

	test('wordMagic - MirrorWord - ab', function() {
		assert.strictEqual(this.wordMagic.isMirrorWord('ab'), false);
	});

	test('wordMagic - MirrorWord - abab', function() {
		assert.strictEqual(this.wordMagic.isMirrorWord('abab'), false);
	});

	test('wordMagic - collectMirrorWords - aabb', function() {
		assert.deepEqual(this.wordMagic.collectMirrorWords('aabb').sort(), ['abba', 'baab'].sort());
	});

	test('wordMagic - collectMirrorWords - abcb', function() {
		assert.deepEqual(this.wordMagic.collectMirrorWords('abcb').sort(), [].sort());
	});
});

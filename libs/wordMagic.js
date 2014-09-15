/**
 * WordMagic
 *
 * @constructor
 */
var WordMagic = function() {};

WordMagic.prototype.generateAnagrams = function(word) {
	'use strict';
	var result = [],
		allAnagrams = this.generateAllAnagrams(word);

	for (var i = 0; i < allAnagrams.length; i++) {
		if (result.indexOf(allAnagrams[i]) === -1) {
			result.push(allAnagrams[i]);
		}
	}
	return result;
};

WordMagic.prototype.generateAllAnagrams = function(word) {
	'use strict';
	if (word.length === 1 || this.onlyOneCharacter(word)) {
		return [word];
	}
	else {
		var result = [];
		for (var i = 0; i < word.length; i++) {
			result = result.concat(
				this.generateAllAnagrams(
					word.slice(0, i) + word.slice(i + 1, word.length)
				).map(
					function(s) {
						return word[i] + s;
					}
				)
			);
		}
		return result;
	}
};

WordMagic.prototype.onlyOneCharacter = function(word) {
	'use strict';
	for (var i = 1; i < word.length; i++) {
		if (word[i] !== word[0]) {
			return false;
		}
	}
	return true;
	//return new RegExp('^' + word[0] + '+$').test(word);
};

WordMagic.prototype.isMirrorWord = function(word) {
	'use strict';
	if (word.length === 1 || this.onlyOneCharacter(word)) {
		return true;
	}
	else {
		var i = 0;
		while (i <= word.length - i) {
			if (word[i] !== word[word.length - 1 - i]) {
				return false;
			}
			i++;
		}
		return true;
	}
};

WordMagic.prototype.collectMirrorWords = function(word) {
	'use strict';
	var result = [],
		anagrams = this.generateAnagrams(word);

	for (var i = 0; i < anagrams.length; i++) {
		if (this.isMirrorWord(anagrams[i])) {
			result.push(anagrams[i]);
		}
	}

	return result;
};

module.exports = WordMagic;

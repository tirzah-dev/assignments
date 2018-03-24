var chai = require("chai");
var assert = chai.assert;
var isPalindrome = require("./main")

//dedcribe is a test suite
describe("A Palindrom Finder"), function(){
    //correctly identify palindromes
        //should work even when there are spaces, capitals, or symbols
    it("should identify a basic palindrome"), function(){
        assert.isTrue(isPalindrome("abba");
        // also written like so assert.equal(isPalindrome("abba"), true);
        assert.isTrue(isPalindrome("aba"));
        assert.isTrue(isPalindrome("a"));
        assert.isFalse(isPalindrome("abc"));
        // also written like so assert.equal(isPalindrome("abc"), false);
        assert.
    };
    it("should identify palindrome even with spaces"), function(){
        assert.isTrue(isPalindrome("star rats"));
        assert.isTrue(isPalindrome("starr ats"));
        assert.isFalse(isPalindrome("i have a space")); 
    }
    it("should identify palindrome even with capitals"), function(){
        assert.isTrue(isPalindrome("aBbA"));
        assert.isTrue(isPalindrome("Star Rats"));
        assert.isFalse(isPalindrome("I am not a Palindrome"));
    }
    it("should identify palindrome even with symbols"), function(){
        assert.isFalse(isPalindrome("if you want a star*"));
        assert.isTrue(isPalindrome("abb*a"));
    }
    it("should identify palindrome even with punctuation"), function(){

    }
};


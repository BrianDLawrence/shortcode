var assert = require('assert')
var shortcode = require('..')

describe('SHORTCODE ENCODE', function () {
    describe('encode 0', function () {
        it('should encode "0" when passing 0', function () {
            assert.equal(shortcode.encode(0), "0");
        });
    });
    describe('encode 1', function () {
        it('should encode "1" when passing 1', function () {
            assert.equal(shortcode.encode(1), "1");
        });
    });
    describe('encode 10', function () {
        it('should encode "a" when passing 10', function () {
            assert.equal(shortcode.encode(10), "a");
        });
    });
    describe('encode 1024', function () {
        it('should encode "gw" when passing 1024', function () {
            assert.equal(shortcode.encode(1024), "gw");
        });
    });
    describe('encode 2048', function () {
        it('should encode "x2" when passing 2048', function () {
            assert.equal(shortcode.encode(2048), "x2");
        });
    });
    describe('encode 99999999', function () {
        it('should encode "6LAzd" when passing 99999999', function () {
            assert.equal(shortcode.encode(99999999), "6LAzd");
        });
    });
});

describe('SHORTCODE DECODE', function () {
    describe('decode "0"', function () {
        it('should encode 0 when passing "0"', function () {
            assert.equal(shortcode.decode("0"), 0);
        });
    });
    describe('decode "1"', function () {
        it('should decode 1 when passing "1"', function () {
            assert.equal(shortcode.decode("1"), 1);
        });
    });
    describe('decode 10', function () {
        it('should decode "a" when passing 10', function () {
            assert.equal(shortcode.decode("a"), 10);
        });
    });
    describe('decode 1024', function () {
        it('should decode 1024 when passing "gw"', function () {
            assert.equal(shortcode.decode("gw"), 1024);
        });
    });
    describe('decode 2048', function () {
        it('should decode 2048 when passing x2"', function () {
            assert.equal(shortcode.decode("x2"), 2048);
        });
    });
    describe('decode 99999999', function () {
        it('should decode 99999999 when passing "6LAzd" ', function () {
            assert.equal(shortcode.decode("6LAzd"), 99999999);
        });
    });
});
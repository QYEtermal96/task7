"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../lib/main.js");


describe("测试描述", function(){

    it("read console.log when number = 2", function(){
        sinon.spy(console, 'log');
        main(3);
        var result = _.flatten(console.log.args).join("\n");
        var expect_string ="3 bottles of beer on the wall, 3 bottles of beer.\n" +
            "Take one down and pass it around, 2 bottles of beer on the wall.\n" +
            "2 bottles of beer on the wall, 2 bottles of beer.\n" +
            "Take one down and pass it around, 1 bottle of beer on the wall.\n" +
            "1 bottle of beer on the wall, 1 bottle of beer.\n" +
            "Take one down and pass it around, no more bottles of beer on the wall.\n" +
            "No more bottles of beer on the wall, no more bottles of beer.\n" +
            "Go to the store and buy some more, 99 bottles of beer on the wall.";
        expect(expect_string).to.equal(result);
    });


});
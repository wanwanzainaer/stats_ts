"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
//Create an object that satisfies the 'DataReader' interface
// const csvFileReader = new CsvFileReader('football.csv');
//Create an instance of MatchReader and pass in something satisfying the 'dataReader' interface
// const matchReader = new MatchReader(csvFileReader);
var matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
matchReader.load();
var summary = Summary_1.Summary.winsAnaysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);

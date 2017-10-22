'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _studentDB = require('./studentDB');

Object.defineProperty(exports, 'studentDB', {
  enumerable: true,
  get: function get() {
    return _studentDB.studentDB;
  }
});

var _courseDB = require('./courseDB');

Object.defineProperty(exports, 'courseDB', {
  enumerable: true,
  get: function get() {
    return _courseDB.courseDB;
  }
});
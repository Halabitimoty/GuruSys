"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PATHS = exports.HTTP_METHODS = exports.CONTENT_TYPES = exports.STATUS_CODES = void 0;
var STATUS_CODES;
(function (STATUS_CODES) {
    STATUS_CODES[STATUS_CODES["OK"] = 200] = "OK";
    STATUS_CODES[STATUS_CODES["CREATED"] = 201] = "CREATED";
    STATUS_CODES[STATUS_CODES["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    STATUS_CODES[STATUS_CODES["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    STATUS_CODES[STATUS_CODES["FORBIDDEN"] = 403] = "FORBIDDEN";
    STATUS_CODES[STATUS_CODES["NOT_FOUND"] = 404] = "NOT_FOUND";
    STATUS_CODES[STATUS_CODES["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
})(STATUS_CODES || (exports.STATUS_CODES = STATUS_CODES = {}));
var CONTENT_TYPES;
(function (CONTENT_TYPES) {
    CONTENT_TYPES["JSON"] = "application/json";
    CONTENT_TYPES["TEXT"] = "text/plain";
    CONTENT_TYPES["HTML"] = "text/html";
})(CONTENT_TYPES || (exports.CONTENT_TYPES = CONTENT_TYPES = {}));
var HTTP_METHODS;
(function (HTTP_METHODS) {
    HTTP_METHODS["GET"] = "GET";
    HTTP_METHODS["POST"] = "POST";
    HTTP_METHODS["PUT"] = "PUT";
    HTTP_METHODS["DELETE"] = "DELETE";
})(HTTP_METHODS || (exports.HTTP_METHODS = HTTP_METHODS = {}));
var PATHS;
(function (PATHS) {
    PATHS["INDEX"] = "/";
    PATHS["AUTH"] = "/auth";
    PATHS["NOTES"] = "/blog";
})(PATHS || (exports.PATHS = PATHS = {}));

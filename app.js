const polka = require("polka");
const express = require("express");
const sirv = require("sirv");
const historyApiFallback = require("connect-history-api-fallback");

polka().use(historyApiFallback()).use(sirv()).listen(5000);

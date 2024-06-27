const express = require("express");
const data = require("../userData");
const router = express.Router();

function getAllData() {
    return data;
  }
  
  function getDataById(id) {
    return data.find((item) => item.id === id);
  }
  
  module.exports = {
    getAllData,
    getDataById
  };
const express = require("express");
const data = require("../userData");


function getAllData() {
    return data;
  }
  
  function getDataById(id) {
    return data.find((item) => item.id === id);
  }
  
  function createData(newData) {
    const id = data.length + 1;
    const user = { id, ...newData };
    data.push(user);
    return user;
  }

  function updateData(id, updates) {
    const index = data.findIndex((item) => item.id === id);
    if (index < 0) {
      return null;
    }
    const updatedData = { ...data[index], ...updates };
    data[index] = updatedData;
    return updatedData;
  }

  function deleteData(id) {
    const index = data.findIndex((item) => item.id === id);
    if (index < 0) {
      return null;
    }
    const deletedData = data.splice(index, 1)[0];
    return deletedData;
  }

  module.exports = {
    getAllData,
    getDataById,
    createData,
    updateData,
    deleteData
  };
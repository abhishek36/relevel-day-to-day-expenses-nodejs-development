//import transaction model here

const addTransaction = async (req, res) => {
    //addTransaction api logic here
};

const getAllDailyTransaction = async (req, res) => {
    //getAllDailyTransaction api logic here
};

const getAllMonthlyTransaction = async (req, res) => {
    //getAllMonthlyTransaction api logic here
};

const getAllYearlyTransaction = async (req, res) => {
    //getAllYearlyTransaction api logic here
};

const getTransactionById = async (req, res) => {
    //getTransactionById api logic here
};

const updateTransactionById = async (req, res) => {
    //updateTransactionById api logic here
};

const deleteTransactionById = async (req, res) => {
    //deleteTransactionById api logic here
};

const AuthController = {
    addTransaction,
    getAllDailyTransaction,
    getAllMonthlyTransaction,
    getAllYearlyTransaction,
    getTransactionById,
    updateTransactionById,
    deleteTransactionById
};
module.exports = AuthController;
module.exports = app => {
    const controller = require('../controllers/customerWallets')();
  
    app.route('/api/v1/ping')
      .get(controller.listCustomerWallets);
  }
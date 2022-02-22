const Account = require('./accountModel')
const data = require('../resthub/scenario.json')

exports.index = (req, res) => {
  Account.get((err, account) => {
    if(err){
      res.json({
        Status: "Error",
        message: err
      })
    }
    res.json({
        Status: "Success",
        message: "Got ACcount info",
        data: account
    })   
  })
}

exports.new = (req, res) => {
  Account.deleteMany((err, account)=>{
    res.json({
      Status: "Success",
      message: "accounts deleted"
    })  
  });
  Account.insertMany(data, (err, account) => { console.log(account); });
};


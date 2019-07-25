/**
 * 钱包API接口
 */
import api from '@/api'

let domain = ''
let wallet = {}

// 获取对应币种钱包
const getWalletByCoin = function (data, success, error) {
  api.get(`${domain}api/v2/account/show`, data, (res) => {
    if (res.rst === 1) {
      success && success(res.data)
    } else {
      error && error(res.msg)
    }
  }, error)
}
wallet.getWalletByCoin = getWalletByCoin

// 我的资产
const myAssets = function (data, success, error) {
  api.get(`${domain}api/v2/account/listAccounts`, data, (res) => {
    if (res.rst === 1) {
      success && success(res.data)
    } else {
      error && error(res.data, res.msg) // res.data: 1 表示账户被冻结
    }
  }, error)
}
wallet.myAssets = myAssets

// 查询钱包地址
const listWithdraws = function (symbol, success, error) {
  api.get(`${domain}api/v2/account/showWithdraw?symbol=${symbol}`, (res) => {
    if (res.rst === 1) {
      success && success(res.data)
    } else {
      error && error(res.msg)
    }
  }, error)
}
wallet.listWithdraws = listWithdraws

// 钱包提现
const walletWithdraw = function (data, success, error) {
  api.post(`${domain}api/v2/account/withdraw`, data, (res) => {
    if (res.rst === 1) {
      success && success(res.msg)
    } else {
      error && error(res.msg)
    }
  }, error)
}
wallet.walletWithdraw = walletWithdraw

// 历史充值充值 direction 1 充值  2 提现
const listDepositHistory = function (data, success, error) {
  api.post(`${domain}/api/v2/account/showHistory`, data, (res) => {
    if (res.rst === 1) {
      success && success(res)
    } else {
      error && error(res.msg)
    }
  }, error)
}
wallet.listDepositHistory = listDepositHistory

// 查询EOS钱包地址
const getEosAddress = function (success, error) {
  api.get(`${domain}api/v2/account2/eos_main`, (res) => {
    if (res.rst === 1) {
      success && success(res.data)
    } else {
      error && error(res.msg)
    }
  }, error)
}
wallet.getEosAddress = getEosAddress

// 获取所有币种
const getAllSymbol = function (data, success, error) {
  api.post(`${domain}api/v2/account/symbol/list`, data, (res) => {
    if (res.rst === 1) {
      success && success(res.data)
    } else {
      error && error(res.msg)
    }
  }, error)
}
wallet.getAllSymbol = getAllSymbol

// 提现地址列表
const addressList = function (data, success, error) {
  api.post(`${domain}api/v1/withdraw/address/list`, data, (res) => {
    if (res.rst === 1) {
      success && success(res.data)
    } else {
      error && error(res.msg)
    }
  }, error)
}
wallet.addressList = addressList

// 新增提现地址
const addAddress = function (data, success, error) {
  api.post(`${domain}api/v1/withdraw/address/add`, data, (res) => {
    if (res.rst === 1) {
      success && success(res)
    } else {
      error && error(res.msg)
    }
  }, error)
}
wallet.addAddress = addAddress

// 删除提现地址
const deleteAddress = function (withdrawId, success, error) {
  api.delete(`${domain}api/v1/withdraw/address/delete/${withdrawId}`, (res) => {
    if (res.rst === 1) {
      success && success(res)
    } else {
      error && error(res.msg)
    }
  }, error)
}
wallet.deleteAddress = deleteAddress

export default wallet

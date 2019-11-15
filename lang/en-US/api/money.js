module.exports = {
  "deposit": {
    "success": "Deposit Request Successful",
    "manual": {
      "receiptLarge": "Receipt Image file size too large.",
      "paymentClose": "Deposit has been closed temporarily, sorry for the inconvinience!",
      "outOfRange": "Deposit amount is less or greater than the accepted amount!",
      "statusPending": "You already have a deposit request pending!",
      "requestPending": "You already have a deposit request pending!",
      "receiptBankError": "Invalid receipt bank!",
      "receiptOwnerRequired": "Invalid receipt bank account name!",
      "receiptAccountRequired": "Invalid receipt bank account number!",
      "accountRequired": "Account number is required!",
      "realNameRequired": "Account Name is required!",
      "bankIdRequired": "Bank is required!",
      "bankIdError": "Invalid Bank",
      "remitTimeRequired": "Remit Time is required!",
      "deviceTypeError": "Device Type must be integer!",
      "remitMemoLimit": "Length of Memo is too long!",
      "notExist": "Account does not exist.",
      "receiptError": "Receipt account error!",
    },
    "credit": {
      "limit": "The deposit amount should be within transaction limit",
      "disabled": "This method for deposit is currently disabled! please contact Customer Support.",
      "failed": "Cannot process deposit request at the moment."
    },
  },
  "withdraw": {
    "success": "Withdraw Request successful",
    "requestPending": "You already have a withdraw request pending!",
    "passwordRequired": "Password is required!",
    "amountRequired": "Withdrawal amount is required!",
    "amountError": "Invalid Amount!",
    "notEnough": "Balance Insufficient for withdrawal due to ongoing promotion!",
    "outOfRange": "Withdrawal amount is out of range!",
    "noExist": "Incorrect password!",
    "passwordError": "Incorrect password!",
    "periodCondition": "You do not meet the minimum wager requirement!",
    "bankRequired": "You do not have a bank account!",
    "specialLock": "Sorry, you have a special promotion lock!",
  },
  "bank": {
    "idRequired": "Bank Name is required!",
    "accountRequired": "Account Number is required!",
    "branchRequired": "Bank Branch name is required!",
    "cityRequired": "IFSC Code is required!",
    "usernameRequired": "Account Name is required!",
    "accountExist": "This Account Number is already associated to another user.",
    "noExist": "Bank information is required"
  },
  "rewardRedeem": {
    "success": "Your request is being processed. Please check after few minutes",
    "memberIdIllegal": "Member does not exist",
    "notEnough": "You don't have enough points",
    "tierIllegal": "Member level is invalid for redeem",
    "amountIllegal": "Amount should be greater than minimum amount",
    "jobExist": "Your previous request is in queue"
  },
  "error": {
    "loyaltyPoint": {
      "memberIdIllegal": "Member does not exist.",
      "maxLevel": "You are at the highest level.",
      "notEnough": "You don't have enough reward point for upgrade.",
      "noExist": "Tier doesn't exist.",
      "unknow": "Unknown error.",
      "default": "Cannot process request upgrade tier right now, please contact customer support."
    }
  }
}
module.exports = {
  "tabs": {
    "netBank": "Net Banking",
    "eWallet": "E-Wallet",
    "card": "Credit / Debit Card",
    "rewardRedeem": "Reward Redeem",
    "paymentGateway": "Payment Gateway",
    "autoCashIn": "Auto Cash-in",
    "manualDeposit": "Manual Deposit",
    "rupeeO": "S99Pay"
  },

  "title": "{0} Limit",
  "help": "How do I make a S99Pay deposit?",
  "min": "Minimum deposit per transaction",
  "max": "Maximum deposit per transaction",
  "daily": "Total daily Deposit",
  "limit": "Daily Transaction Limit",
  "noLimit": "No Limit",
  "deposit": "Deposit",
  "rupeeo": {
    "lb1": 'Your Bank',
    "lb2": 'Deposit Amount'
  },
  "wageringNote": "NOTE: Deposits are subjected to a 1x wagering requirement.",
  "netBank": {
    "step": "Step {0}",
    "title": "Net Banking",
    "choose": "Please choose Net Banking Method",
    "transfer": {
      "title": "Make Bank Transfer",
      "content": "You need to add money to Siam99's bank account assigned by our Customer Support. Then you need to upload the bank receipt."
    },
    "form": {
      "title": "Fill Deposit Form",
      "receiptBankId": "Receipt Bank Account",
      "amount": "Deposit Amount",
      "bankAccount": "Select Bank",
      "transferType": "Transfer Type",
      "referenceNumber": "Reference Number",
      "transferType": "Transfer Type",
      "memo": "Deposit Memo",
      "time": "Deposit Time",
      "image": "Choose receipt image to upload",
      "choose": "Choose",
      "accountType": {
        "noBank": `You don't have any bank. <span id="addBank">Click here</span> to add bank`
      }
    },
    "errMsg": {
      "receiptBankId": {
        "required": "Please Select Receipt Bank"
      },
      "amount": {
        "required": "Please enter amount for deposit",
        "numeric": "Please enter only numbers",
        "range": "Must be within transaction range"
      },
      "bankAccount": {
        "checkRequired": "Bank Account is required"
      },
      "depositTime": {
        "required": "Please enter deposit time"
      },
      "image": {
        "required": "Please upload deposit slip",
        "maxSize": "File size must be less or equal to 2MB",
        "type": "Must be only image file"
      },
      "accountType": {
        "required": "Please select account type"
      }
    },
    "unavailable": {
      "p1": "This service is not available right now. Please Contact",
      "p2": "."
    }
  },
  "online": {
    "title": "E-Wallet",
    "choose": "Please choose your preferred Payment Type:",
    "verifyFalse": {
      "p1": "If you want to use easy pay service, please contact our",
      "p2": "to turn it on for you."
    },
    "exceed": {
      "p1": "You have already reached the deposit limit for today, if you have any question, please contact our",
      "p2": "."
    },
    "form": {
      "payment": "Payment Amount",
      "camount": "Custom Amount",
      "pbank": "Please Choose bank",
      "bank": "Choose Bank",
      "amount": "Total Amount"
    },
    "errMsg": {
      "amount": {
        "required": "Please enter your deposit amount",
        "numeric": "Please enter only numbers",
        "range": "Must be within transaction range"
      },
      "bank": {
        "required": "Please select Bank"
      }
    },
  },
  "card": {
    "title": "Credit / Debit Transfer",
    "notice": {
      "p1": "If you want to use credit card service, please contact our",
      "p2": "and provide KYC for application."
    },
    "note": {
      "p1": "NOTE: For security reason, the approved and declined transaction limitations are 3 times per month. If you want to have permission for more transactions, you can contact our",
      "p2": "."
    },
    "autofill": "Autofill your previous entry",
    "form": {
      "fName": "First Name",
      "lName": "Last Name",
      "phone": "phone",
      "mail": "Email",
      "country": "Country",
      "state": "State",
      "city": "City",
      "address": "Address",
      "zipCode": "Zip Code",
      "currency": "Currency",
      "amount": "Amount",
      "memo": "Memo"
    },
    "errMsg": {
      "fName": {
        "required": "Please enter your first name",
        "alpha": "Must contain only alphabet",
        "min": "Must be at least 3 characters in length",
        "max": "must be less than 20 characters in length"
      },
      "lName": {
        "required": "Please enter your last name",
        "alpha": "Must contain only alphabet",
        "min": "Must be at least 3 characters in length",
        "max": "must be less than 20 characters in length"
      },
      "phone": {
        "required": "Please enter your phone number",
        "numeric": "Must contain only number",
        "length": "Must be exactly 10 numbers"
      },
      "mail": {
        "required": "Please enter your email address",
        "email": "Must be valid email",
        "max": "Must be less than 100 characters"
      },
      "country": {
        "required": "Please Select the country"
      },
      "state": {
        "required": "Please select the state"
      },
      "city": {
        "required": "Please enter your city name",
        "alpha": "Must contain only alphabet"
      },
      "address": {
        "required": "Please enter you address",
        "alpha": "Must be alphanumeric and contain atleast one alphabet"
      },
      "zipCode": {
        "required": "Please enter zip code",
        "numeric": "Must contain only number"
      },
      "currency": {
        "required": "Please select currency"
      },
      "amount": {
        "required": "Please enter amount for deposit",
        "numeric": "Must be only numbers",
        "range": "Must be within transaction range"
      }
    }
  },
  "cs": "Customer Service",
  "rewardRedeem": {
    "title": "Redeem your Reward points",
    "desc": "Want to play more games but stuck in the processing queue? Now you don't have to wait anymore. Just redeem your reward points and get instant credit in your account. Keep Playing, Keep Winning!",
    "redeem": "Redeem",
    "help": "How to get Reward points?"
  },
  "autoCashIn": {
    "help": "How do I use the Auto Cash In method for depositing?",
    "choose": "Choose any one of our Banks",
    "unavailable": "No Bank Available",
    "notSelected": "Please Select One Of The Banks",
    "scanQR": "Please scan the QR Code <br/> to complete the transaction",
    "manualText": "For Manual Deposit",
    "btn": {
      "btn1": "Ask For Bank",
      "btn2": "Prompt Pay"
    },
    "desc": {
      "t1": "Add Bank account",
      "l1": `Please make sure you have listed your account information in the <span class="bankLink"> Accounts Section</span>. Please only use the bank accounts that you have listed here to deposit to your Siam99 account.`,
      "t2": "Make Deposit",
      "l2": "Please wait 1 to 3 minutes for amount to be added to your account",
      "t3": "Unlisted accounts",
      "l3": `If you have deposited from an account that is not listed in the <span class="bankLink"> Accounts Section</span>, please contact our <span class="link">Customer Care</span> to complete your deposit request.`,
    }
  },
  "noBank": {
    "title": "No Bank Account",
    "des": "Please add your bank account information before proceeding.",
    "btn": "Add Bank Details"
  },
  "modal": {
    "rupeeoModal": `
      <h3>Try our new money transfer S99Pay</h3>
      <p>
        <span>Easier</span>
        <span>.</span>
        <span>Quicker</span>
        <span>.</span>
        <span>Better</span>
      </p>
    `,
    "rupeeoBtn": 'View S99Pay',
  }
}
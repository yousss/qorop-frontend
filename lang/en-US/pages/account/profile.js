module.exports = {
  "cs": "Customer Support",
  "tabs": {
    "profile": "User Profile",
    "bank": "Bank Account"
  },
  "profile": {
    "title": "Profile",
    "uProfile": "Update Profile",
    "name": "Full Name",
    "username": "Username",
    "email": "Email",
    "mobile": "Mobile",
    "phone": "Phone Number",
    "gender": {
      "title": "Gender",
      "m": "Male",
      "f": "Female",
      "o": "Other"
    },
    "dob": "D.O.B",
    "identityNumber": "ID Number",
    "facebook": "Facebook",
    "line": "Line",
    "address": "Address",
    "birth": "Date of Birth",
    "note": {
      "p1": "To change phone number contact",
      "p2": "."
    },
    "errMsg" :{
      "facebook": {
        "minLength": "Must be more than or equal to 5 characters",
        "alphaNumDot": "Must be alphanumeric or dot"
      },
      "email": {
        "required": "Please enter your email!",
        "email": "Please enter a valid email!",
      },
      "dob": {
        "required": "Please Enter Your Birth Date!",
        "checkDOB": "User should be more than 18yrs"
      }
    },
    "subscription": {
      "notJoined": 'Subscribe to our Newsletter',
      "pending": 'Newsletter confirmation pending',
      "unsubscribed": 'Unsubscribed to Newsletter',
      "subscribed": 'Subscribed to Newsletter',
      "successMsg": 'Please check your email for Newsletter confirmation'
    }
  },
  "button": {
    "cPassword": "Change Password",
    "uPassword": "Update Password",
    "eProfile": "Edit Profile",
    "uProfile": "Update Profile",
    "bank": "Add Account",
    "cancel": "Cancel"
  },
  "password": {
    "title": "Change Password",
    "old": "Old Password",
    "new": "New Password",
    "cNew": "Confirm Password",
    "errMsg": {
      "old": {
        "required": "Please Enter Your Old Password",
        "wrongPass": "Password Incorrect",
      },
      "newPass": {
        "required": "Please Enter A New Password",
        "min": "Must be more than 6 characters",
        "max": "Must be less than 12 characters",
        "alpha": "Must contain atleast one alphabet",
        "number": "Must contain atleast one number"
      },
      "confirm": {
        "same": "Password not matched"
      }
    }
  },
  "bank": {
    "title": "Bank Detail",
    "accName": "Account Name",
    "bank": "Bank Name",
    "branch": "Bank Branch",
    "acc": "Account Number",
    "note": {
      "p1": "To change your Bank Account please contact our",
      "p2": "."
    },
    "errMsg": {
      "bank": {
        "required": "Please select bank",
      },
      "branch": {
        "required": "Please Enter Bank Branch Name",
        "max": "Must be less than 40 characters",
        "alpha": "Must contain at least one alphabet",
        "num": "Must contain alpha numeric characters"
      },
      "name": {
        "required": "Please Enter Your Account Name",
        "maxLength": "Must be less than or equal to 60 characters",
        "aplhaNumSpace": "Must contain alpha numeric characters"
      },
      "number": {
        "duplicate": "Account Number is already used",
        "required": "Please Enter Your Account Number",
        "numeric": "Must be only numbers",
        "min": "Must be more than or equal to 10 characters",
        "max": "Must be less than or equal to 21 characters"
      }
    }
  }
}
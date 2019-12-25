import Vue from "vue";

var popupBlockerChecker = {
  check: function (popup_window) {
    var _scope = this;
    if (popup_window) {
      if (/chrome/.test(navigator.userAgent.toLowerCase())) {
        setTimeout(function () {
          _scope._is_popup_blocked(_scope, popup_window);
        }, 200);
      } else {
        popup_window.onload = function () {
          _scope._is_popup_blocked(_scope, popup_window);
        };
      }
    } else {
      _scope._displayError();
    }
  },
  _is_popup_blocked: function (scope, popup_window) {
    if ((popup_window.innerHeight > 0) == false) { scope._displayError(); }
  },
  _displayError: function () {
    alert("Popup Blocker is enabled! Please add this site to your exception list.");
  }
};

let jwRedirect = {
  launchGame: function(game, platform, gameKindId){
    if(platform==='SA' && [4, 10, 11, 12, 13, 14, 15].includes(gameKindId)){
      let newWin = window.open();
      popupBlockerChecker.check(newWin);
      newWin.document.open();
      newWin.document.write(game.gameLaunch);
      newWin.document.close();
    }else{
      let domain = window.location.href;
      let gameLaunch = window.open(game.gameLaunch, '_blank');
      popupBlockerChecker.check(gameLaunch)    
    }
  },
  launchURL: function(url) {
    let launchURL = window.open(url);
    popupBlockerChecker.check(launchURL);
  },
  launchPaymentMethod: function(data){
    let launchURL = window.open(data.url);
    popupBlockerChecker.check(launchURL);
  },
  launchNewWinHtml: function (html) {
    var win = window.open();
    popupBlockerChecker.check(win);
    win.document.write(html);
  },
  launchPaymentMethodForm: function(data){
    let newWin = window.open();
    popupBlockerChecker.check(newWin);

    function transferData (newWin, transferData) {
      let form = window.document.createElement('form');
      form.action = transferData.domainUrl;
      form.method = 'POST';
      form.enctype = "application/json";

      Object.keys(transferData).map((key) => {
        if(key!=='domainUrl'){
          let input = window.document.createElement('input');
          input.name = key;
          input.value = transferData[key];
          input.type = 'hidden';
          form.appendChild(input);
        }
      })

      newWin.document.body.appendChild(form);
      newWin.document.forms[0].submit();
    }

    transferData(newWin, data)
  }
}

export default () => {
  Vue.prototype.$jwRedirect = jwRedirect
}
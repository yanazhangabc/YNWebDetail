"use strict";

var bridge = function (obj) {

  var call_handler_value = "callhandler";
  var register_handler_value = "registerhandler";

  function setupWebViewJavascriptBridge(callback) {
    if (window.WebViewJavascriptBridge) {
      return callback(window.WebViewJavascriptBridge);
    }

    if (window.WVJBCallbacks) {
      return window.WVJBCallbacks.push(callback);
    }

    window.WVJBCallbacks = [callback];
    var WVJBIframe = document.createElement('iframe');
    WVJBIframe.style.display = 'none';
    WVJBIframe.src = 'https://__bridge_loaded__';
    document.documentElement.appendChild(WVJBIframe);
    setTimeout(function () {
      document.documentElement.removeChild(WVJBIframe);
    }, 0);
  }

  obj.callhandler = function (fun, param, callback) {
    var data = {
      fun: fun,
      param: param
    };
    console.log("callhandler");
    setupWebViewJavascriptBridge(function (bridge) {
      bridge.callHandler(call_handler_value, data, callback);
    });
  }, obj.registerhandler = function (callback) {
    setupWebViewJavascriptBridge(function (bridge) {
      bridge.registerHandler(register_handler_value, function (data, responseCallback) {
        callback(data, responseCallback);
      });
    });
  };
  return obj;
}({});

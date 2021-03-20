// package: pstat
// file: pstat.proto

var pstat_pb = require("./pstat_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var PStatService = (function () {
  function PStatService() {}
  PStatService.serviceName = "pstat.PStatService";
  return PStatService;
}());

PStatService.GetHistory = {
  methodName: "GetHistory",
  service: PStatService,
  requestStream: false,
  responseStream: false,
  requestType: pstat_pb.Request,
  responseType: pstat_pb.History
};

exports.PStatService = PStatService;

function PStatServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

PStatServiceClient.prototype.getHistory = function getHistory(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(PStatService.GetHistory, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.PStatServiceClient = PStatServiceClient;


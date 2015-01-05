var azure = require('azure');

exports.CreateQueueIfNeeded = function (connectionModel, queueName, callback) {
    var queueSvc = azure.createQueueService(connectionModel.AccountName, connectionModel.AccountKey);

    queueSvc.createQueueIfNotExists(queueName, function () {
        callback();
    });
};

exports.Push = function (queue, message, callback) {
    var queueSvc = azure.createQueueService(queue.AccountName, queue.AccountKey);
    queueSvc.createMessage(queue.QueueName, JSON.stringify(message), callback);
};
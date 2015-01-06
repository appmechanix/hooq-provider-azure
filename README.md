hooq-provider-azure
===================

Azure Storage Queue provider. Used for pushing messages into queues via hooq.io.

Installing
==========

```
npm install hooq-provider-azure --save
```

Example Usage
=============

```javascript
var azureProvider = require('hooq-provider-azure');

// Creating a queue
azureProvider.CreateQueueIfNeeded(queueSettings, queueName, function(){
	console.log("Created queue");
});

// Pushing to a queue
azureProvider.Push(queueSettings, messageObject, function(){
	console.log("Done");
});
```

Settings Object
===============

```javascript
var queueSettings = {
	AccountName: 'AzureAccountName',
	AccountKey: 'AzureAccountKey',
	QueueName: 'NameOfAzureQueue'
};
```

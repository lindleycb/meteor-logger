# Meteor Logger 

A project to provide runtime configurable **log** messaging to your **meteor** apps.

## Quick Start

```sh
$ mrt add logger
```

## Key Concepts

Allows you to instrument your code both **client** and **server** side with log messages like this:

```js
    Logger.log(Logger.Debug, 'Button clicked');
    Logger.log(Logger.Info, 'Data: '+Logger.stringify(data));
    Logger.log(Logger.Error, 'Error: '+Logger.stringify(err));
```

and then increase or decrease the amount of logging output at runtime e.g. just info, info and error, all etc.

## Defaults

Default logging is for **info** and **error** messages only to be output - both for the **client** and **server**.

## Runtime Configuration

Log settings can be change for client and server **independently** of one another at **run time** using the RuntimeConfigurationSettings collection (which will be created by this package).  For example (at the mongo prompt):


```js
db.runtimeConfigurationSettings.update({_id: 'client'}, {$set: {logMode: '[E]$'}});
db.runtimeConfigurationSettings.update({_id: 'server'}, {$set: {logMode: '[IED]$'}});
```

**NOTE:** *logMode* is a regular expression which will be used to test each log message to see whether or not to output it.  Log modes are, as you might expect: 

* **E**: Error
* **I**: Info
* **D**: Debug


**Depends on**: *no dependencies*

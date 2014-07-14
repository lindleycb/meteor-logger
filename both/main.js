//
// Exported package methods
//
Logger = {
    //
    // package version which can be queried using Logger.version in the console window
    //
    version: '1.0.4',

    //
    // log modes - logging can then be filtered using a regular expression
    // e.g. /E$/ (just errors), /[IE]$/ (info and error)
    //
    Error: 'E',
    Info: 'I',
    Debug: 'D',

    DefaultLogMode: '[IE]$',
    
    //
    // Utility for logging that is switchable via the database
    //
    log: Meteor.bindEnvironment(function(mode, message) {
        // allow single parameter message and make assumptions about mode
        if (!message) { message = mode; mode = Logger.Info}
        var settings = Logger.runtimeConfigurationSettings();
        var logMode = new RegExp(((settings && settings.logMode)?settings.logMode:Logger.DefaultLogMode));
        if (logMode.test(mode)) {
            console.log(message);
        }
    }, function(){}),

    //
    // Access to the runtime configuration
    //
    runtimeConfigurationSettings: function() {
        return RuntimeConfigurationSettings.findOne(Meteor.isServer?'server':'client');
    },
    
    //
    // Shorthand for pretty-printed stringify
    //
    stringify: function(obj) {
        return JSON.stringify(obj, null, 2);
    }
};

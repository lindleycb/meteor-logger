Meteor.startup(function(){

 //
 // configuration bootstrap
 //
 if (Meteor.isServer) {
     if (!RuntimeConfigurationSettings.findOne('server')) {
        RuntimeConfigurationSettings.insert({
            _id: 'server',
            logMode: '[IE]$'  // Info and Error
        });
     }
     if (!RuntimeConfigurationSettings.findOne('client')) {
        RuntimeConfigurationSettings.insert({
            _id: 'client',
            logMode: '[IE]$'  // Info and Error
        });
     }
 }

});

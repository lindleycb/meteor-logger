Meteor.publish("runtimeConfigurationSettings", function () {
    return RuntimeConfigurationSettings.find('client');
});

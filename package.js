Package.describe({
    summary: 'A project to provide runtime configurable **log** messaging to your **meteor** apps.'
});

Package.on_use(function(api) {
    api.add_files([
        'client/subscriptions/runtimeConfigurationSettings.js'
    ], 'client');
    api.add_files([
        'server/bootstrap/runtimeConfigurationSettings.js',
        'server/publications/runtimeConfigurationSettings.js'
    ], 'server');
    api.add_files([
        'both/collections/collections.js',
        'both/main.js'
    ], ['client', 'server']);

    if (typeof api.export !== 'undefined') {
        api.export(['Logger'], ['client', 'server']);
    }
});

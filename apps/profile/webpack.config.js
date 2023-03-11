const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'profile',

  exposes: {
    './Component': './apps/profile/src/app/app.component.ts',
  },

  shared: {
    "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
    "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
    "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
    "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});

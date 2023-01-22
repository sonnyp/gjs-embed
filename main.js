import system from 'system';

import Application from './Application.js'

console.debug(`main.js loaded from ${import.meta.url}`);

const application = new Application();
application.run([system.programInvocationName, ...system.programArgs]);
'use strict';
                                           
const createPlayMethodProxy = function(instance) {  
  const handler = {
    get: function(target, propName, receiver) {
      let response;

      if (propName.includes('play')) {
        const activity = propName.slice(4);
        if (instance.activities.includes(activity)) {
          response = `I love to play ${activity}`;
        }

        response = `I don't play ${activity}`;
      } 

      response = `${propName} is not a function`;

      return () => response;
    }
  }

  return new Proxy(instance, handler);
};
                                                                          
const proxy = createPlayMethodProxy({ activities: ['Football', 'Tennis'] });

console.log(proxy.playTennis());	
console.log(proxy.playFootball());	
console.log(proxy.playPolitics());	
console.log(proxy.dance());

/**
 * @param {object} initialState The inital object.
 * @param {object[]} changes The changes to be made to the object (in order).
 * @return {object}
 */
 const applyChanges = (initialState, changes) => {
    const result = {...initialState};
    
    const applyChange = (oringinal, change) => {
      Object.keys(change).forEach(key => {
        // if this key does not exist on obj1
        if (oringinal.hasOwnProperty(key) === false) {
        
          oringinal[key] = change[key];
        }
    
        else {
          //   if it is the same value
          if (oringinal[key] === change[key]) { 
         
          }
          else {
        
            if (
              typeof oringinal[key] === 'object' && Array.isArray(oringinal[key]) === false
              && typeof change[key] === 'object' && Array.isArray(change[key]) === false
            ) {
              applyChange(oringinal[key], change[key]);
            }
            else {
              //       replace the old value with the new one
              oringinal[key] = change[key];
            }
          }
        }
      });
    }
  
    changes.forEach(change => applyChange(result, change));
    
    return result;
  }
  
  const initialState = {
    id: 1,
    username: 'user',
    password: 'password',
    items: [{ id: 1, name: 'item1' }],
    address: {
      country: 'country',
      city: 'city',
      zip: 'zip'
    }
  };
  
  const changes = [
    { phone: '123456789', user: 'new user', password: '123456', items: [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }], address: { country: 'USA' } },
    { email: 'example@gmail.com', username: 'example', address: { city: 'New York' } },
    { phone: '987654321', address: { zip: '12345' } },
  ];
  
  applyChanges(initialState, changes);
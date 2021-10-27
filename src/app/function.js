// Write a function in Javascript that receives as a parameter an array of changes done to an object since it was created, and returns the current state of the object after all the changes.
//
//   The function receives the changes in this format:
//    ```js
//    const initialState = { id: 1, username: 'user', password: 'password', items: [{ id: 1, name: 'item1' }], address: { country: 'country', city: 'city', zip: 'zip' } };
//    const changes = [
//    	{ phone: '123456789', user: 'new user', password: '123456', items: [{ id: 1, name: 'item1' }, items: { id: 2, name: 'item2' }], address: { country: 'USA' } },
//    	{ email: 'example@gmail.com', username: 'example', address: { city: 'New York' } },
//    	{ phone: '987654321', address: { zip: '12345' } },
//    ];
//    ```
//
//    Given the above example the result would be:
//    ```js
//    const calculatedState = {
//       id: 1,
//       username: 'example',
//       password: '123456',
//       items: [{ id: 1, name: 'item1' }, items: { id: 2, name: 'item2' }],
//       address: { country: 'USA', city: 'New York', zip: '12345' },
//       phone: '987654321',
//       user: 'new user',
//       email: 'example@gmail.com'
//    }
//    ```
//
//    Implement the function in the following way:
//    ```js
//    const calculateState = (initialState, changes) => {
//    	// Implement solution here
//    };
//    ```
//
//    - You are allowed to write more than one function to implement the solution (but calculateState must return the correct result)
//    - It is recommended to use Lodash for this task.

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
          //   then we add the key and value to obj 1
          oringinal[key] = change[key];
        }
        // Otherwise
        else {
          //   if it is the same value
          if (oringinal[key] === change[key]) { 
            //     do nothing
            // no op
          }
          //   otherwise
          else {
            //     if both values are a object
            if (
              typeof oringinal[key] === 'object' && Array.isArray(oringinal[key]) === false
              && typeof change[key] === 'object' && Array.isArray(change[key]) === false
            ) {
              //       then we run this function again on the values
              applyChange(oringinal[key], change[key]);
            }
            //     otherwise
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
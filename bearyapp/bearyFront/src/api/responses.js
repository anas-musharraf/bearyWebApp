const domain_url = 'http://localhost:3001'

const global_options = {
    credentials: 'include',
    headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json"
    }
  }
  
  // GET all responses
  export const getResponses = () => {
    // the URL for the request
    const url = "/responses"; // replace with heroku instance?
  
    const request = new Request(domain_url + url, global_options);
  
    return fetch(request)
      .then(res => {
        if (res.status === 200) {
          return res.json();
        } else {
          alert("Could not get responses");
        }
      })
      .catch(error => {
        console.log("failed to get the resources")
        console.log(error);
      });
  };

  // GET request for a specific emotion
  export const getResponse = (emotion) => {
    // the URL for the request
    const url = `/responses/${emotion}`;
  
    const request = new Request(domain_url + url, global_options);
  
    return fetch(request)
      .then(res => {
        if (res.status === 200) {
          return res.json();
        } else {
          return Promise.reject("Couldn't find the response");
        }
      })
      .catch(error => {
        alert(error.message)
      });
  };

// POST request to add a new response, it has to be an obj = {emotion:   , text:  }
export const addResponse = (response) => {
    // the URL for the request
    const url = "/responses";
  
    // Create our request constructor with all the parameters we need
    const request = new Request(domain_url + url, {
      method: "POST",
      body: JSON.stringify(response),
      credentials: "include",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    });
  
    // Send the request with fetch()
    return fetch(request)
      .then(function (res) {
        return res;
      })
      .catch(error => {
        console.log(error);
      });
  };


    // GET all interactions
    export const getInteractions = () => {
      // the URL for the request
      const url = "/interactions";
    
      const request = new Request(domain_url + url, global_options);
    
      return fetch(request)
        .then(res => {
          if (res.status === 200) {
            return res.json();
          } else {
            alert("Could not get responses");
          }
        })
        .catch(error => {
          console.log("failed to get the resources")
          console.log(error);
        });
    };
  
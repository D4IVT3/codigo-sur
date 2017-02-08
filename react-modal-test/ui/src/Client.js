/* eslint-disable no-undef */
function search( query, cb) {
  var temp =fetch(`/users`)
    .then(checkStatus)
    .then(parseJSON)
    .then(cb)

  return filtrar(query,temp);
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error); // eslint-disable-line no-console
    throw error;
  }
}

function parseJSON(response) {
  return response.json();
}

function filtrar(query, response) {
  var temp,count =0;
  for (var i = 0; i < response.length; i++) {
    if (response[i].name.toUpperCase().indexOf(query) > -1) {
        temp[count]=response[i];
        count++;
    } 
  }
  return temp;
}

const Client = { search };
export default Client;
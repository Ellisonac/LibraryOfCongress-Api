var locUrl = 'https://www.loc.gov/search/?fo=json';
var query = document.location.search;
var container = document.querySelector('#results-container');

var searchLibrary = function (search) {
  var apiUrl = locUrl + '&q=' + search;

  fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          displayResults(data,search);
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    })
    .catch(function (error) {
      alert('Unable to connect to Library. Error Code ' + error);
    });
};

var displayResults = function (data,search) {

  let title;
  let description;

  data.results.forEach((result) => {
    title = result.title;
    description = result.description;

    let block = document.createElement('div');
    block.classList = 'align-center';
    
    let titleEl = document.createElement('h2');
    titleEl.innerHTML = title;

    block.append(titleEl)

    let descEl = document.createElement('p');
    descEl.innerHTML = description;

    block.append(descEl)

    container.append(block)

  })

}

console.log(query.substring(1,query.length))
searchLibrary(query.substring(1,query.length));
// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random quote to the page.
 */
function addRandomQuote() {
  const quotes = [
        'I am Beyonce always.',
    'I talk a lot, so I\'ve learned to just tune myself out',
    'Dwight you ignorant slut',
    'I am running away from my responsibilities and it feels good.',
    'I want people to be afraid of how much they love me',
    'Bears, Beets, Battlestar Galactica',
  ];

  // Pick a random quote.
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  // Add it to the page.
        const quoteContainer = document.getElementById('quote-container');
  quoteContainer.innerText = quote;
}
async function fetchData(maxcomments) {
  const response = await fetch('/data?max-comments=' + maxcomments);
  const comments = await response.json();
  console.log(comments);
  var innerHTML = '';
  for (var i = 0; i < comments.length; ++i) {
    var comment = comments[i];
    innerHTML += comment + '<br>';
  }
  document.getElementById('hi').innerHTML = innerHTML;
}

async function deleteData() {
  const response = await fetch('/delete-data', {method: 'POST'});
  fetchData(0);
}

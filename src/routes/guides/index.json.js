// this script help handle an API route that uses it.
// with this script(which runs on the server): 
// we can connect to our database, or any data source securely with having it to be expose to the frontend
// when using it, because this is named 'index.json.js': it will be refernce to as '/guides.json
// if its named 'article.json.js': it will be referenced as '/guides/article.json

// help perform a http GET request
export async function get() {
  const guides = [
    { id: 1, title: 'some title 1' },
    { id: 2, title: 'some title 2' },
    { id: 3, title: 'some title 3' },
    { id: 4, title: 'some title 4' },
    { id: 5, title: 'some title 5' }
  ];

  return {
    status: 200,
    body: { guides }
  }
}
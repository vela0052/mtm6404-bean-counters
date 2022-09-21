// rows
// create thje rows for the table
// each will contain data for a single bean counter
// usign the map method to create the HTML for each bean counter
// @param: counters (array)
// @return: HTML string
/*
const property = ['name']
 const counter= {
    index: 1,
    name: 'Dawson',
    bean: 'Lima Beans',
    count: 759
  }

  counter.name // Dawson
  counter['name'] // Dawson
  counter[property] // Dawson
  */
function rows(counters){
    return counters.map(counter => `
    <tr>
        <th scope="row">${counter.index}</th>
        <td>${counter.name}</td>
        <td>${counter.bean}</td>
        <td>${counter.count}</td>
    </tr>
    `).join('')  

}

// search
// will filter the counters that match the search query
// it will use the filter method to filter the counters array
// @param: counters(array), query(string)
// @return: array of counters
// && AND
//  || OR

function search (counters, query){
    return counters.filter(counter => 
        counter.name.toLowerCase().includes(query.toLowerCase()) ||
        counter.bean.toLowerCase().includes(query.toLowerCase()))
}

// total
// calculates the total number of counted beans
// it will use the reduce method to calculate
// @param: counters(array) 
// @return: number 

function total (counters){
    return counters.reduce((total, counter) => (
        total + counter.count
    ), 0)
}

//order
// will sort the bean counters by a property (index, name, bean, count)
// will use the sort method
// @param: counters (array), property (string)
// @return array of counters


// lees than 0 (-1), a comes first
// greater than 0 (1), b comes first
// equal(0), no change
/*
const property = ['name']
 const counter= {
    index: 1,
    name: 'Dawson',
    bean: 'Lima Beans',
    count: 759
  }

  counter.name // Dawson
  counter['name'] // Dawson
  counter[property] // Dawson
  */
function order(counters, property){
    return counters.sort((a, b) => {
        if(a[property] < b[property]){
            return -1
        } else if(a > b){
            return 1
        } else {
            return 0
        }
    })

}
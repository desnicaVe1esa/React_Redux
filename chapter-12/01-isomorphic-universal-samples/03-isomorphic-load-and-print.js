(() => {
  /*
    Данный .js файл имеет изоморфный характер - в нем содержится универсальный код JavaScript. Его можно запустить
    с помощью среды Node.js или включить в тег <script> в браузере
   */

  var printNames = response => {
      var people = JSON.parse(response).results,
          names = people.map(({name}) => `${name.last}, ${name.first}`)
      console.log(names.join('\n')) /*
                                        Reid, Allan
                                        Burton, Josephine
                                        Palmer, James
                                        May, Jared
                                        Torres, Amy
                                        Perez, Jar
                                        Watts, Gary
                                        Richardson, Christine
                                        Prescott, Brooklyn
                                        Fleming, John
                                     */
  }

  if (typeof window !== 'undefined') {
      const request = new XMLHttpRequest()
      request.open('GET', 'https://api.randomuser.me/?nat=US&results=10')
      request.onload = () => printNames(request.response)
      request.send()
  } else {
      // В Node.js нет XMLHttpRequest. Модуль http в Node.js для выполнения запроса
      const https = require('https')
      https.get(
          'https://api.randomuser.me/?nat=US&results=10',
          res => {

              let results = ''

              res.setEncoding('utf8')
              res.on('data', chunk => results += chunk)

              res.on('end', () => printNames(results))
          }
      )
  }

})()

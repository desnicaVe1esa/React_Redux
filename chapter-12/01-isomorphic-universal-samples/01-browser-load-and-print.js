(() => {
  // printNames - пример универсального кода. Это означает, что код может запускаться на нескольких средах
  var printNames = response => {
      var people = JSON.parse(response).results,
          names = people.map(({name}) => `${name.last}, ${name.first}`)
      console.log(names.join('\n')) /*
                                        Jones, Brittany
                                        Brewer, Alicia
                                        Matthews, Claudia
                                        Alexander, Jonathan
                                        Taylor, Randy
                                        Rose, Harper
                                        Carroll, Alyssa
                                        Simpson, Monica
                                        Wood, Rebecca
                                        Burton, Ross
                                     */
  }

  const request = new XMLHttpRequest()
  request.open('GET', 'https://api.randomuser.me/?nat=US&results=10')
  request.onload = () => printNames(request.response)
  request.send()

})()

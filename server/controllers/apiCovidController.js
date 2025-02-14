const axios = require("axios").default

class CovidController {
  static getLive (req, res) {
    // let baseUrl = "https://covid-api.mmediagroup.fr/v1/cases"
    let globalUrl = "https://covid-api.mmediagroup.fr/v1/cases?country=Global"
    // let indonesiaUrl = "https://covid-api.mmediagroup.fr/v1/cases?country=Indonesia"
    axios.get(globalUrl)
    .then(response => {
      let data = response.data.All
      res.status(200).json({
        confirmed: data.confirmed,
        recovered: data.recovered,
        deaths: data.deaths,
      })
    })
    .catch(err => {
      res.send({err})
    })
  }
}

module.exports = CovidController
//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

//verify3 Routing
router.post('/round1/verify3', function (req, res) {

    if (req.session.data['over19'] == "no"){
        res.redirect('notEligible') 
      } else if (req.session.data['twelveMonths'] == "yes") {
        res.redirect('notEligible')
      } else {
        res.redirect('verify4')
      }
  })

//idp3 Routing

router.post('/round1/idp1', function (req, res) {
  res.redirect('idp2')
})

router.post('/round1/idp2', function (req, res) {
        res.redirect('idp3')
  })

router.post('/round1/idp3', function (req, res) {

    if (req.session.data['idDoc'] == "driving"){
        res.redirect('idpDriving') 
      } else {
        res.redirect('idpPassport')
      }
  })
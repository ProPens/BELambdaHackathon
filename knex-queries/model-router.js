const express = require('express');

const Occupations = require('./model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Occupations.find()
        .then(occupation => {
            res.json(occupation);
            })
    .catch(err => {
        res.status(500)
        .json({ message: 'Failed to get occupations' });
    });
});

router.get('/Reuire-English', (req, res) => {
    Occupations.findEnglish()
        .then(occupation => {
            res.json(occupation);
            })
    .catch(err => {
        res.status(500)
        .json({ message: 'Failed to get occupations' });
    });
});

router.get('/Reuire-Science', (req, res) => {
    Occupations.findScience()
        .then(occupation => {
            res.json(occupation);
            })
    .catch(err => {
        res.status(500)
        .json({ message: 'Failed to get occupations' });
    });
});

router.get('/Reuire-Math', (req, res) => {
    Occupations.findMath()
        .then(occupation => {
            res.json(occupation);
            })
    .catch(err => {
        res.status(500)
        .json({ message: 'Failed to get occupations' });
    });
});

router.get('/Reuire-SocialStudies', (req, res) => {
    Occupations.findSocialStudies()
        .then(occupation => {
            res.json(occupation);
            })
    .catch(err => {
        res.status(500)
        .json({ message: 'Failed to get occupations' });
    });
});

router.get('/Reuire-Arts', (req, res) => {
    Occupations.findArts()
        .then(occupation => {
            res.json(occupation);
            })
    .catch(err => {
        res.status(500)
        .json({ message: 'Failed to get occupations' });
    });
});

router.get('/Reuire-Athletics', (req, res) => {
    Occupations.findAthletics()
        .then(occupation => {
            res.json(occupation);
            })
    .catch(err => {
        res.status(500)
        .json({ message: 'Failed to get occupations' });
    });
});


// router.get('/:id', (req, res) => {
//   const { id } = req.params;

//   Schemes.findById(id)
//   .then(scheme => {
//     if (scheme) {
//       res.json(scheme);
//     } else {
//       res.status(404).json({ message: 'Could not find scheme with given id.' })
//     }
//   })
//   .catch(err => {
//     res.status(500).json({ message: 'Failed to get schemes' });
//   });
// });

// router.get('/:id/steps', (req, res) => {
//   const { id } = req.params;

//   Schemes.findSteps(id)
//   .then(steps => {
//     if (steps.length) {
//       res.json(steps);
//     } else {
//       res.status(404).json({ message: 'Could not find steps for given scheme' })
//     }
//   })
//   .catch(err => {
//     res.status(500).json({ message: 'Failed to get steps' });
//   });
// });

// router.post('/', (req, res) => {
//   const schemeData = req.body;

//   Schemes.add(schemeData)
//   .then(scheme => {
//     res.status(201).json(scheme);
//   })
//   .catch (err => {
//     res.status(500).json({ message: 'Failed to create new scheme' });
//   });
// });

// // router.post('/:id/steps', (req, res) => {
// //   const stepData = req.body;
// //   const { id } = req.params; 

// //   Schemes.findById(id)
// //   .then(scheme => {
// //     if (scheme) {
// //       Schemes.addStep(stepData, id)
// //       .then(step => {
// //         res.status(201).json(step);
// //       })
// //     } else {
// //       res.status(404).json({ message: 'Could not find scheme with given id.' })
// //     }
// //   })
// //   .catch (err => {
// //     res.status(500).json({ message: 'Failed to create new step' });
// //   });
// // });

// router.put('/:id', (req, res) => {
//   const { id } = req.params;
//   const changes = req.body;

//   Schemes.findById(id)
//   .then(scheme => {
//     if (scheme) {
//       Schemes.update(changes, id)
//       .then(updatedScheme => {
//         res.json(updatedScheme);
//       });
//     } else {
//       res.status(404).json({ message: 'Could not find scheme with given id' });
//     }
//   })
//   .catch (err => {
//     res.status(500).json({ message: 'Failed to update scheme' });
//   });
// });

// router.delete('/:id', (req, res) => {
//   const { id } = req.params;

//   Schemes.remove(id)
//   .then(deleted => {
//     if (deleted) {
//       res.json({ removed: deleted });
//     } else {
//       res.status(404).json({ message: 'Could not find scheme with given id' });
//     }
//   })
//   .catch(err => {
//     res.status(500).json({ message: 'Failed to delete scheme' });
//   });
// });

module.exports = router;
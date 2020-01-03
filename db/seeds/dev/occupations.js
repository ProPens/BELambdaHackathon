
exports.seed = function(knex) {
  return knex('Occupations').insert([
    {name: 'Accountant', English: 0, Science: 0, Math: 1, Social_Studies: 0, Arts: 0, Athletics: 0 },
    {name: 'Adult Nurse', English :0, Science: 1, Math: 0, Social_Studies: 1, Arts: 0, Athletics: 0},
    {name: 'Advertising Account Executive', English: 1, Science: 0, Math: 1, Social_Studies: 1, Arts: 1, Athletics: 0},
    {name: 'Advertising Account Planner', English: 0, Science: 0, Math: 1, Social_Studies: 1, Arts: 1, Athletics: 0},
    {name: 'Advertising Copywriter', English: 0, Science: 0, Math: 0, Social_Studies: 1, Arts: 0, Athletics: 0},
    {name: 'Aeronautical Engineer', English: 0, Science: 1, Math: 1, Social_Studies: 0, Arts: 1, Athletics: 0},
    {name: 'Agricutural Consultant', English: 0, Science: 1, Math: 0, Social_Studies: 1, Arts: 0, Athletics: 0},
    {name: 'Agricultural Manager', English: 0, Science: 1, Math: 0, Social_Studies: 1, Arts: 0, Athletics: 0},
    {name: 'Aid Worker', English: 0, Science: 0, Math: 0, Social_Studies: 1, Arts: 0, Athletics: 0},
    {name: 'Air Traffic Controller', English: 0, Science: 0, Math: 1, Social_Studies: 1, Arts: 0, Athletics: 0},
    {name: 'Airline Carbin Crew', English: 0, Science: 0, Math: 0, Social_Studies: 1, Arts: 0, Athletics: 0},
    {name: 'Amenity Horticulturist', English: 0, Science: 1, Math: 0, Social_Studies: 0, Arts: 1, Athletics: 0},
    {name: 'Analytical Chemist', English: 0, Science: 1, Math: 1, Social_Studies: 0, Arts: 0, Athletics: 0},
    {name: 'Animal Nutritionist', English: 0, Science: 1, Math: 1, Social_Studies: 0, Arts: 0, Athletics: 0}
  ]);
};

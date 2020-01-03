exports.seed = function(knex) {
  return knex('occupations').insert([
    {
      name: 'Accountant',
      english: 0,
      science: 0,
      math: 1,
      social_studies: 0,
      arts: 0,
      athletics: 0
    },
    {
      name: 'Adult Nurse',
      english: 0,
      science: 1,
      math: 0,
      social_studies: 1,
      arts: 0,
      athletics: 0
    },
    {
      name: 'Advertising Account Executive',
      english: 1,
      science: 0,
      math: 1,
      social_studies: 1,
      arts: 1,
      athletics: 0
    },
    {
      name: 'Advertising Account Planner',
      english: 0,
      science: 0,
      math: 1,
      social_studies: 1,
      arts: 1,
      athletics: 0
    },
    {
      name: 'Advertising Copywriter',
      english: 0,
      science: 0,
      math: 0,
      social_studies: 1,
      arts: 0,
      athletics: 0
    },
    {
      name: 'Aeronautical Engineer',
      english: 0,
      science: 1,
      math: 1,
      social_studies: 0,
      arts: 1,
      athletics: 0
    },
    {
      name: 'Agricutural Consultant',
      english: 0,
      science: 1,
      math: 0,
      social_studies: 1,
      arts: 0,
      athletics: 0
    },
    {
      name: 'Agricultural Manager',
      english: 0,
      science: 1,
      math: 0,
      social_studies: 1,
      arts: 0,
      athletics: 0
    },
    {
      name: 'Aid Worker',
      english: 0,
      science: 0,
      math: 0,
      social_studies: 1,
      arts: 0,
      athletics: 0
    },
    {
      name: 'Air Traffic Controller',
      english: 0,
      science: 0,
      math: 1,
      social_studies: 1,
      arts: 0,
      athletics: 0
    },
    {
      name: 'Airline Carbin Crew',
      english: 0,
      science: 0,
      math: 0,
      social_studies: 1,
      arts: 0,
      athletics: 0
    },
    {
      name: 'Amenity Horticulturist',
      english: 0,
      science: 1,
      math: 0,
      social_studies: 0,
      arts: 1,
      athletics: 0
    },
    {
      name: 'Analytical Chemist',
      english: 0,
      science: 1,
      math: 1,
      social_studies: 0,
      arts: 0,
      athletics: 0
    },
    {
      name: 'Animal Nutritionist',
      english: 0,
      science: 1,
      math: 1,
      social_studies: 0,
      arts: 0,
      athletics: 0
    }
  ]);
};

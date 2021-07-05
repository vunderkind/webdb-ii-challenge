exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          "vin": "Toyota",
          "make": "102391",
          "model": "Corolla",
          "mileage": 5478,
          "transmissionType": "automatic",
          "titleStatus": "second-hand"
        }
      ]);
    });
};
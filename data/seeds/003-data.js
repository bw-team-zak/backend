exports.seed = function (knex) {
    const jsonData = JSON.stringify(
      [
        {
          type: 'pie',
          values: [19, 26, 55],
          labels: ['Food', 'Rent', 'Utility'],
        },
      ]
    )
    const DSdata = [{
          data: jsonData,    
          layout:
          { width: 420, height: 540, title: 'Your Savings' },
          state: '07-09'
      }]
      // Deletes ALL existing entries
          return knex('ds_data').insert(DSdata);
  
    };
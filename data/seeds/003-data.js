exports.seed = function (knex) {
    const DSdata = [{
          data:[
            {
              type: 'pie',
              values: [19, 26, 55],
              labels: ['Food', 'Rent', 'Utility'],
            },
          ],    
          layout:
          { width: 420, height: 540, title: 'Your Savings' },
          state: '07-09'
      }]
      // Deletes ALL existing entries
          return knex('ds_data').insert(DSdata);
  
    };
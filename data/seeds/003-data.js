exports.seed = function (knex) {
  const graph_data = {   
    data:[
      {
        type: 'pie',
        values: [19, 26, 55],
        labels: ['Food', 'Rent', 'Utility'],
      },
    ],    
    layout:
    { width: 420, height: 540, title: 'Your Savings' },
  }

  JSON.stringify(graph_data)
  
  const DSdata = {
      graph_data,
      user_ID:'1635ob1dkQIz1QMjLmBpt0E36VyM96ImeyrgZ'
    }
      // Deletes ALL existing entries
          return knex('ds_data').insert(DSdata);
  
    };
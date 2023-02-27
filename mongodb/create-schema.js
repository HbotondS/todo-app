const mongodbURL = 'mongodb://localhost/todo-app';

db = connect(mongodbURL);

db.createCollection('Todos', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Todo object validation',
      required: ['name'],
      properties: {
        name: {
          bsonType: 'string',
          description: "'name' must be a string and is required",
        },
      },
    },
  },
});

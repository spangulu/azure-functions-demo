const { app } = require('@azure/functions');

app.http('hello', {
  methods: ['GET'],
  authLevel: 'anonymous',
  route: 'hello',
  handler: async (request) => {
    const name = request.query.get('name') || 'world';
    return { jsonBody: { message: `Hello, ${name}!` } };
  }
});

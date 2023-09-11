import path from 'path';
import swaggerJSDoc, { SwaggerDefinition } from 'swagger-jsdoc';

const swaggerDefinition: SwaggerDefinition = {
  openapi: '3.0.3',
  info: {
    title: 'The Music Project API.',
    version: '1.0.0',
    description: 'This is the full documentation of the The Music Project API Version 1.'
  },
  servers: [{ url: '/api/v1' }]
};

const dir = path.join(__dirname, '../../docs', '/');

const options = {
  swaggerDefinition,
  // Path to the API docs
  apis: [`${dir}/**/*.yaml`]
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;

const toOpenApi = require('json-schema-to-openapi-schema');

const schema = require('./tilt-schema.json');

const convertedSchema = toOpenApi(schema);

console.log(convertedSchema);

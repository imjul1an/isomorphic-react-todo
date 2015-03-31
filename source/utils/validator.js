import validator from 'is-my-json-valid';

export default {
  isValid: isValid
};

function isValid(data, callback) {
  var schema = {
    type: 'object',
    required: true,
    additionalProperties:false,
    properties:{
      page:{
        type: 'array',
        required: true,
        items: {
          properties: {
            modules: {
              type: 'array',
              items:{
                properties:{
                  id:{type:'number', required: true},
                  // publishedAt:{type:'string', required: true},
                  title:{type:'string', required:true},
                  text:{type:'string', required:true},
                  resources:{
                    type:'object',
                    properties:{
                      videos:{
                        type:'array',
                        items:{
                          properties:{
                            id:{type:'number', required:true},
                            type:{type:'string', minLength:1, required:true},
                            filename:{type:'string', minLength:1, required:true},
                            title:{type:'string'},
                            text:{type:'string'}
                          }
                        }
                      },
                      images:{
                        type:'array',
                        items:{
                          properties:{
                            id:{type:'number', required:true},
                            type:{type:'string', minLength:1, required:true},
                            filename:{type:'string', minLength:1, required:true},
                            title:{type:'string'},
                            text:{type:'string'}
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            placement: {type: 'string', required: true}
          }
        }
      },
      metadata:{
        required: true,
        type: 'object',
        properties:{
          externalId: {type: 'number', required: true},
          language: {type: 'string', required: true},
          navigationPath: {type: 'string', required: true}
        }
      }
    }
  };

  var validate = validator(schema, {
    verbose: true,
    greedy: true
  });

  if(!data) {
    return callback({message: 'Data is missed. Please make sure that data exists'});
  }

  var valid = validate(data);

  return valid ? callback(null, {isValid: valid}) : callback(validate.errors, {isValid: valid});
}
import request from 'request';
import testUtils from '../../utils';

describe('health.spec.js', ()=> {
  var apiUrl, url, response, headers, payload, results, apiKey;

  beforeEach(()=> {
    apiUrl = testUtils.getRootUrl();
  });

  beforeEach(()=> {
    url = apiUrl + '/api/health';
  });

  beforeEach(()=> {
    apiKey = testUtils.getApiKey();
  });

  describe('when request without api key', ()=> {
    beforeEach((done)=> {
      request({url: url, json: true}, (err, res, body)=> {
        response = res;
        results = body;
        done(err);
      });
    });

    it('should respond 403 (Forbidden)', ()=> {
      expect(response.statusCode).to.equal(403);
    });
  });

  describe('when request with wrong api key', ()=> {

    beforeEach(()=> {
      url += '?apiKey=' + apiKey + 'wrong';
    });

    beforeEach((done)=> {
      request({url: url, json: true}, (err, res, body)=> {
        response = res;
        results = body;
        done(err);
      });
    });

    it('should respond 401 (Unauthorized)', ()=> {
      expect(response.statusCode).to.equal(401);
    });
  });

  describe('when request with correct api key', ()=> {
    beforeEach(()=> {
      url += '?apiKey=' + apiKey;
    });

    beforeEach((done)=> {
      request({url: url, json: true}, (err, res, body)=> {
        response = res;
        results = body;
        done(err);
      });
    });

    it('should respond 200 (OK)', ()=> {
      expect(response.statusCode).to.equal(200);
    });

    it('should contain property health', ()=> {
      expect(results).to.have.property('health');
    });

    it('should contain property health.app', ()=> {
      expect(results.health).to.have.property('app');
    });

    it('should contain property health.env', ()=> {
      expect(results.health).to.have.property('env');
    });

    it('should contain property health.version', ()=> {
      expect(results.health).to.have.property('version');
    });

    it('should contain property health.message', ()=> {
      expect(results.health).to.have.property('message');
    });
  });

});


import request from 'request';
import testUtils from '../../utils';

describe('items.spec.js', ()=> {
  var apiUrl, url, response, headers, payload, results;

  beforeEach(()=> {
    apiUrl = testUtils.getRootUrl();
  });

  beforeEach(()=> {
    url = apiUrl + '/api/items';
  });

  describe('when request without access token', ()=> {
    beforeEach((done)=> {
      request.post({url: url, headers: headers, json: true}, (err, res, body)=> {
        response = res;
        results = body;
        done(err);
      });
    });

    it('should respond 403 (Forbidden)', ()=> {
      expect(response.statusCode).to.equal(403);
    });
  });

  describe('when request with wrong access token', ()=> {
    beforeEach(()=> {
      payload = {accessToken: 'wrong access token', data:{}};
    });

    beforeEach((done)=> {
      request.post({url: url, headers: headers, body: payload, json: true}, (err, res, body)=> {
        response = res;
        results = body;
        done(err);
      });
    });

    it('should respond 401 (Unauthorized)', ()=> {
      expect(response.statusCode).to.equal(401);
    });
  });

  describe('when request with correct access token', ()=> {

    describe('and data is missing', ()=> {

      beforeEach(()=> {
        payload = {
          accessToken: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'
        };
      });

      beforeEach((done)=> {
        request.post({url: url, headers: headers, body: payload, json: true}, (err, res, body)=> {
          response = res;
          results = body;
          done(err);
        });
      });

      it('should respond 400 (Data is missing)', ()=> {
        expect(response.statusCode).to.equal(400);
      });
    });

    xdescribe('and data is valid', ()=> {
      beforeEach(()=> {
        payload = {
          accessToken: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
          data: testUtils.getTestData()
        };
      });

      beforeEach((done)=> {
        request.post({url: url, headers: headers, body: payload, json: true}, (err, res, body)=> {
          response = res;
          results = body;
          done(err);
        });
      });

      it('should respond 201 (Created)', ()=> {
        expect(response.statusCode).to.equal(201);
      });
    });

    xdescribe('and data is invalid', ()=> {
      beforeEach(()=> {
        payload = {
          accessToken: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
          data: testUtils.getTestData({invalidFormat: true})
        };
      });

      beforeEach((done)=> {
        request.post({url: url, headers: headers, body: payload, json: true}, (err, res, body)=> {
          response = res;
          results = body;
          done(err);
        });
      });

      it('should respond 422 (Unprocessable Entity)', ()=> {
        expect(response.statusCode).to.equal(422);
      });
    });
  });
});
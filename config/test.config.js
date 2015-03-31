var config = {
  connection: 'mongodb://app-dev-01.auctionata.web:27017,app-dev-02.auctionata.web:27017,web-mix-02.auctionata.web:27017/?replicaSet=DevSet01',

  applicationUrl: 'http://localhost:3012',

  // JUST FOR MVP, ACCESS TOKEN should be Generated and stored in DB
  accessToken: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',

  // JUST FOR MVP, API KEY should be Generated and stored in DB
  apiKey: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'
};

export default config;
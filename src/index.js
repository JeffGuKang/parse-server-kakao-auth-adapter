import * as https from 'https';

export class KakaoAuth {

    constructor() {
    }

    validateAuthData(authData, options) {
        return new Promise(function (resolve, reject) {
          https.get({
              host: "kapi.kakao.com",
              path: "/v1/user/access_token_info",
              headers: {
                  'Authorization': 'Bearer ' + authData.access_token
              }
          }, function (res) {
            var data = '';
            res.on('data', function (chunk) {
              data += chunk;
            });
            res.on('end', function () {
              try {
                data = JSON.parse(data);
              } catch (e) {
                return reject(e);
              }
              resolve(data);
            });
          }).on('error', function () {
            reject('Failed to validate this access token with Kakao.');
          });
        }).then(response => {
          if (response && response.id == authData.id) {
            return;
          }
          throw new Parse.Error(Parse.Error.OBJECT_NOT_FOUND, 'Kakao auth is invalid for this user.');
        });
    }

    validateAppId() {
        return Promise.resolve();
    }

}

export default KakaoAuth;
module.exports = KakaoAuth;

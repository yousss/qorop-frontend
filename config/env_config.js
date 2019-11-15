const path = require("path");
const config = require(path.resolve("config"));

module.exports = {
  ENV_VAR: process.env.NODE_ENV,
  BASE_URL: config.webUrl,
  qrcode: config.qrcode,
  qrlink: config.qrlink,
  CMSAPI: config.cmsApi,
  LABSAPI: config.labsApi,
  FPAPI: config.fpApi,
  TOURNAMENTAPI: config.tournamentApi,
  OTPAPI: config.otpApi,
  LPAPI: config.lpApi,
  IMG_CDN: 'https://jwcm.imgix.net',
  BAAPI: config.baApi,
  logrocket: config.logrocket,
  PGAPI: config.pgApi
}
const parseCookies = (req, res, next) => {

  // res.cookies = (req.headers.cookie) ? req.headers.cookie.substr(10) : {};

  if (Object.keys(req.headers).length === 0 ){
    req.cookies = {};
  } else {
    // console.log("req headers", req.headers.cookie);
    let allCookies = req.headers.cookie.split(';');

    allCookies.forEach(function(temp){
      var eachCookie = temp.split('=');
      let tempCookie = {};
      req.cookies[eachCookie[0].trim()] = eachCookie[1].trim();
    });
    res.end();
  }
  
  next();
};

module.exports = parseCookies;
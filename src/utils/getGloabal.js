export function getGlobalState() {
  const device = /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent) ? 'MOBILE' : 'DESKTOP';
  const collapsed = device !== 'DESKTOP';

  return {
    device,
    collapsed,
  };
}

export function highlightText(queryStr, targetStr) {
  const reg = new RegExp(queryStr, 'gi');
  const finalStr = targetStr.replace(reg, str => {
    return '<mark>' + str + '</mark>';
  });

  return finalStr;
}

export const initFacebookSDK = () => {
  if (window.FB) {
    window.FB.XFBML.parse();
  }
  let locale = 'vi_VN';
  window.fbAsyncInit = function () {
    window.FB.init({
      appId: import.meta.env.VITE_FB_ID, // You App ID
      cookie: true, // enable cookies to allow the server to access
      // the session
      xfbml: true, // parse social plugins on this page
      version: 'v2.1', // use version 2.1
    });
  };
  // Load the SDK asynchronously
  (function (d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = `//connect.facebook.net/${locale}/sdk.js`;
    fjs.parentNode.insertBefore(js, fjs);
  })(document, 'script', 'facebook-jssdk');
};

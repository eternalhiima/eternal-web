const LinkPage = {
  TWITTER: {key: 'twitter', url: 'https://twitter.com/'},
  FACEBOOK: {key: 'facebook', url: 'https://www.facebook.com/'},
  INSTAGRAM: {key: 'instagram', url: 'https://www.instagram.com/'},
  LINE: {key: 'line', url: 'https://line.me'}
}

const LinkPageList = [
  LinkPage.TWITTER,
  LinkPage.FACEBOOK,
  LinkPage.INSTAGRAM,
  LinkPage.LINE
]

/**
* LinkPageType
*/
export default class LinkPageType {
  /**
   * @param key
   * @return LinkPageType
   */
  static get (key) {
    return LinkPageList.filter((LinkPage) => LinkPage.key === key)[0]
  }

  /**
   * @param LinkPageType
   * @return String URL
   */
  static getUrl (linkPageType) {
    return linkPageType.url
  }

  static values () {
    return LinkPageList
  }

  static get TWITTER () {
    return LinkPage.TWITTER
  }

  static get FACEBOOK () {
    return LinkPage.FACEBOOK
  }

  static get INSTAGRAM () {
    return LinkPage.INSTAGRAM
  }

  static get LINE () {
    return LinkPage.LINE
  }
}

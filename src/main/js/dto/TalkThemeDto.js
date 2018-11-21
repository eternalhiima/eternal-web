/**
 * TalkThemeDto
 */
export default class TalkThemeDto {
  constructor (id, order, title, description, thumbnailUrl, goodCount, badCount,
    talkedCount, categoryList, postedUser, postedDateTime) {
    this.id = id
    this.order = order
    this.title = title
    this.description = description
    this.thumbnailUrl = thumbnailUrl
    this.goodCount = goodCount
    this.badCount = badCount
    this.talkedCount = talkedCount
    this.categoryList = categoryList
    this.postedUser = postedUser
    /** yyyyMMddHHmm形式 */
    this.postedDateTime = postedDateTime
  }

  get id () {
    return this._id
  }

  set order (val) {
    this._order = val
  }

  get order () {
    return this._order
  }

  set id (val) {
    this._id = val
  }

  get title () {
    return this._title
  }

  set title (val) {
    this._title = val
  }

  get description () {
    return this._description
  }

  set description (val) {
    this._description = val
  }

  get thumbnailUrl () {
    return this._thumbnailUrl
  }

  set thumbnailUrl (val) {
    this._thumbnailUrl = val
  }

  get goodCount () {
    return this._goodCount
  }

  set goodCount (val) {
    this._goodCount = val
  }

  get badCount () {
    return this._badCount
  }

  set badCount (val) {
    this._badCount = val
  }

  get talkedCount () {
    return this._talkedCount
  }

  set talkedCount (val) {
    this._talkedCount = val
  }

  get categoryList () {
    return this._categoryList
  }

  set categoryList (val) {
    this._categoryList = val
  }

  get postedUser () {
    return this._postedUser
  }

  set postedUser (val) {
    this._postedUser = val
  }

  get postedDateTime () {
    return this._postedDateTime
  }

  set postedDateTime (val) {
    this._postedDateTime = val
  }
}

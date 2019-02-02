/**
 * TalkThemeDto
 */
export default class TalkThemeDto {
  constructor (id, order, title, description, thumbnailUrl, goodCount, badCount,
    talkCount, categoryList, postUser, postDateTime) {
    this.id = id
    this.order = order
    this.title = title
    this.description = description
    this.thumbnailUrl = thumbnailUrl
    this.goodCount = goodCount
    this.badCount = badCount
    this.talkCount = talkCount
    this.categoryList = categoryList
    this.postUser = postUser
    /** yyyyMMddHHmm形式 */
    this.postDateTime = postDateTime
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

  get talkCount () {
    return this._talkCount
  }

  set talkCount (val) {
    this._talkCount = val
  }

  get categoryList () {
    return this._categoryList
  }

  set categoryList (val) {
    this._categoryList = val
  }

  get postUser () {
    return this._postUser
  }

  set postUser (val) {
    this._postUser = val
  }

  get postDateTime () {
    return this._postDateTime
  }

  set postDateTime (val) {
    this._postDateTime = val
  }
}

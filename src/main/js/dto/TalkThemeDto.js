/**
 * TalkThemeDto
 */
export default class TalkThemeDto {

  constructor (id, title, description, thumbnailUrl, goodCount, badCount,
    talkedCount, relatedCategoryList, postedUser, postedDateTime) {
    this.id = id
    this.title = title
    this.description = description
    this.thumbnailUrl = thumbnailUrl
    this.goodCount = goodCount
    this.badCount = badCount
    this.talkedCount = talkedCount
    this.relatedCategoryList = relatedCategoryList
    this.postedUser = postedUser
    /** yyyyMMddHHmm形式 */
    this.postedDateTime = postedDateTime
  }

  get id () {
    return this._id
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

  get relatedCategoryList () {
    return this._relatedCategoryList
  }

  set relatedCategoryList (val) {
    this._relatedCategoryList = val
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

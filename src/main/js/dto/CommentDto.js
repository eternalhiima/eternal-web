/**
 * CommentDto
 */
export default class CommentDto {
  constructor (id, userName, profileImgUrl, comment, commentedDateTime) {
    this.id = id
    this.userName = userName
    this.profileImgUrl = profileImgUrl
    this.comment = comment
    this.commentedDateTime = commentedDateTime
  }

  get id () {
    return this._id
  }

  set id (val) {
    this._id = val
  }

  get userName () {
    return this._userName
  }

  set userName (val) {
    this._userName = val
  }

  get profileImgUrl () {
    return this._profileImgUrl
  }

  set profileImgUrl (val) {
    this._profileImgUrl = val
  }

  get comment () {
    return this._comment
  }

  set comment (val) {
    this._comment = val
  }

  get commentedDateTime () {
    return this._commentedDateTime
  }

  set commentedDateTime (val) {
    this._commentedDateTime = val
  }
}

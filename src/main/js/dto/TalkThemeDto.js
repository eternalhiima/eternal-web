class TalkThemeDto {

  constructor(id, title, description, goodCount, badCount, talkedCount,
    relatedCategoryList, postedUser, postedDateTime) {
    this.id = id
    this.title = title
    this.description = description
    this.goodCount = goodCount
    this.badCount = badCount
    this.talkedCount = talkedCount
    this.relatedCategoryList = relatedCategoryList
    this.postedUser = postedUser
    this.postedDateTime = postedDateTime
  }

  get Id() {
    return id
  }
  set Id(id) {
    this.id = id
  }
  get Title() {
    return title
  }
  set Title(title) {
    this.title = title
  }
  get Description() {
    return description
  }
  set Description(description) {
    this.description = description
  }
  get GoodCount() {
    return goodCount
  }
  set GoodCount(goodCount) {
    this.goodCount = goodCount
  }
  get BadCount() {
    return badCount
  }
  set BadCount(badCount) {
    this.badCount = badCount
  }
  get TalkedCount() {
    return talkedCount
  }
  set TalkedCount(talkedCount) {
    this.talkedCount = talkedCount
  }
  get RelatedCategoryList() {
    return relatedCategoryList
  }
  set RelatedCategoryList(relatedCategoryList) {
    this.relatedCategoryList = relatedCategoryList
  }
  get PostedUser() {
    return postedUser
  }
  set PostedUser(postedUser) {
    this.postedUser = postedUser
  }
  get PostedDateTime() {
    return postedDateTime
  }
  set PostedDateTime(postedDateTime) {
    this.postedDateTime = postedDateTime
  }

}

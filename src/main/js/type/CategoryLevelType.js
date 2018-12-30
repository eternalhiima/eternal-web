const CategoryLevel = {
  EROTIC: {level: 0, name: '下ネタ'},
  CASUAL: {level: 1, name: 'カジュアル'},
  NORMAL: {level: 2, name: '普通'},
  FORMAL: {level: 3, name: 'フォーマル'},
  INTELLIGENCE: {level: 4, name: '知的'}
}

const CategoryLevelList = [
  CategoryLevel.EROTIC,
  CategoryLevel.CASUAL,
  CategoryLevel.NORMAL,
  CategoryLevel.FORMAL,
  CategoryLevel.INTELLIGENCE
]

/**
 * CategoryLevelType
 */
export default class CategoryLevelType {
  /**
   * @param level カテゴリレベル
   * @return categoryLevelType カテゴリレベルタイプ
   */
  static get (level) {
    return CategoryLevelList.filter((categoryLevel) => categoryLevel.level === level)[0]
  }

  /**
   * @param level カテゴリレベル
   * @return categoryLevelName カテゴリレベル名
   */
  static getNameByLevel (level) {
    return CategoryLevelList.filter((categoryLevel) => categoryLevel.level === level)[0].name
  }

  /**
   * @param categoryLevelType カテゴリレベルタイプ
   * @return categoryLevel カテゴリレベル
   */
  static getLevel (categoryLevelType) {
    return CategoryLevelList.filter((categoryLevel) => categoryLevel === categoryLevelType)[0].level
  }

  /**
   * @return CategoryLevelList カテゴリレベルタイプリスト
   */
  static values () {
    return CategoryLevelList
  }

  static get EROTIC () {
    return CategoryLevel.EROTIC
  }

  static get CASUAL () {
    return CategoryLevel.CASUAL
  }

  static get NORMAL () {
    return CategoryLevel.NORMAL
  }

  static get FORMAL () {
    return CategoryLevel.FORMAL
  }

  static get INTELLIGENCE () {
    return CategoryLevel.INTELLIGENCE
  }
}

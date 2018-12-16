/**
 * DateUtilityClass
 */
export default class DateUtil {
  /**
   * 表示ように日時を変換
   * @param dateTime yyyyMMddHHmm
   * @return yyyy/MM/dd HH:mm
   */
  static parseDateTimeForDisplay (dateTime) {
    if (dateTime.length !== 12) {
      return null
    }
    return `${dateTime.slice(0, 4)}/${dateTime.slice(4, 6)}/${dateTime.slice(6, 8)} ${dateTime.slice(8, 10)}:${dateTime.slice(10, 12)}`
  }

  /**
   * 現在日時を返却する
   * @return yyyyMMddHHmm
   */
  static now () {
    const now = new Date()
    return `${now.getFullYear()}${now.getMonth() + 1}${now.getDate()}${now.getHours()}${now.getMinutes()}`
  }
}

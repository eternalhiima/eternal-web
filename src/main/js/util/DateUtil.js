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
      return ''
    }
    return `${dateTime.slice(0, 4)}/${dateTime.slice(4, 6)}/${dateTime.slice(6, 8)} ${dateTime.slice(8, 10)}:${dateTime.slice(10, 12)}`
  }

  /**
   * 表示ように日付を変換
   * @param date yyyyMMdd
   * @return yyyy/MM/dd
   */
  static parseDateForDisplay (date) {
    if (date.length !== 8) {
      return ''
    }
    return `${date.slice(0, 4)}/${date.slice(4, 6)}/${date.slice(6, 8)}`
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

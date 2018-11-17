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
}

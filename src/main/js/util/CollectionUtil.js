/**
 * CollectionUtil
 */
export default class CollectionUtil {
  /**
   * @param array 配列
   * @param rows 行
   * @param cols 列
   * @return 2次元配列
   */
  static convert2DArray (array, rows, cols) {
    const twoDArray = []
    for (let r = 0; r < rows; r++) {
      const row = []
      for (let c = 0; c < cols; c++) {
        const num = r * cols + c
        if (array.length <= num) {
          break
        }
        row.push(array[num])
      }
      twoDArray.push(row)
    }
    return twoDArray
  }
}

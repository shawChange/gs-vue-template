export default class SimpleAdapter {
  static convertObj (obj, map) {
    let dist = {}
    for (let i in map) {
      dist[map[i]] = obj[i]
    }

    return dist
  }

  static convertArrray (array, map) {
    let dist = []
    for (let i in array) {
      let item = array[i]
      dist[i] = SimpleAdapter.convertObj(item, map)
    }

    return dist
  }
}

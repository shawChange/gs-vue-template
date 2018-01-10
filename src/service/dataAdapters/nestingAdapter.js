import SimpleAdapter from './simpleAdapter';

export default class NestingAdapter {
  static convertNestingObj(obj, map, setData = {}) {
    for (let i in map) {
      if (typeof Array.isArray(obj[i])) {
        let array = SimpleAdapter.convertArrray(obj[i], map[i].map);
        setData[map[i].name] = array;
        NestingAdapter.convertNestingObj(array, map[i].map, setData[map[i].name]);
      } else if (typeof obj[i] === 'object') {
        let item = SimpleAdapter.convertObj(obj[i], map[i].map);
        setData[map[i].name] = item;
        NestingAdapter.convertNestingObj(item, map[i].map, setData[map[i].name]);
      } else {
        setData[map[i]] = obj[i];
      }
    }

    return setData;
  }


  static convertNestingArray(data, map) {
    let dist = [];
    for (let i in data) {
      let item = dist[i];
      dist[i] = NestingAdapter.convertNestingObj(item, map);
    }

    return dist;
  }
}

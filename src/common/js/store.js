
// 收藏
// undefined favorite  按点击动态的布尔值
export function saveToLocal(id, key, value) {
    let seller = window.localStorage.__seller__; // json数据 
    if (!seller) { // 如果为空 则所有的seller都为空
        seller = {};
        seller[id] = {};
    } else {
        seller = JSON.parse(seller); // 有值 ==》 解析json数据 
        if (!seller[id]) {    // 如果josn数据下的undefined为空 则为空
            seller[id] = {};
        }
    }
    seller[id][key] = value; // 动态值 赋值
    window.localStorage.__seller__ = JSON.stringify(seller); //解析为json字符串 动态赋值
}
// 未定义  favorite  false ===>传过来的初始值
export function loadFromLocal(id, key, def) {
    let seller = window.localStorage.__seller__;
    // 如果seller为空 则返回def  ==>false 
    if (!seller) {
        return def;
    }
    // josn数据解析 seller中的值 key值为undefined
    seller = JSON.parse(seller)[id];
    // 再次判断是否为空
    if (!seller) {
        return def;
    }
    // 拿到布尔值   seller数据key值为favorite的
    let ret = seller[key];
    return ret || def; // 返回true 或者 false 
}
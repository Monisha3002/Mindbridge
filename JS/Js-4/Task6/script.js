const arr = [
    { id: 1, name: 'A' },
    { id: 2, name: 'B' },
];

function transformToMap(arr) {
    return arr.reduce(function(map, obj) {
    map[obj.id] = obj.name;
        return map;
    }, {});
}
const result = transformToMap(arr);
console.log(result);
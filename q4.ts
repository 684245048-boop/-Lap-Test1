let Product = [
    ["Laptop", 15, true],
    ["Desk", 50, false],
    ["Grass Vase", 5, true],
    ["Monitor", 10, true],
    ["Chair", 100, true]
];

for (let i = 0; i < Product.length; i++) {
    if (Product[i][2] === true) {
        console.log(
            "สินค้า:", Product[i][0],
            "จำนวน:", Product[i][1],
            "สถานะ: แตกหักง่าย"
        );
    }
}

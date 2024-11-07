const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBe(3.745);
});

test("One dollar should be 146.26 yen", function() {
    // $1 = (1/1.07)€, then multiply by 156.5 JPY
    const yen = fromDollarToYen(1);
    const expected = (1 / 1.07) * 156.5;
    expect(yen).toBeCloseTo(146.26, 2);
});

test("1000 yen should be 5.56 pounds", function() {
    // 1000 JPY = (1000/156.5)€, then multiply by 0.87 GBP
    const pounds = fromYenToPound(1000);
    const expected = (1000 / 156.5) * 0.87;
    expect(pounds).toBeCloseTo(5.56, 2);
});
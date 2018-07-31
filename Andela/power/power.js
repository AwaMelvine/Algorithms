function power(base, power) {
    if (power < 0) return 1 / pow(base, -power);
    var b = base, result = 1;
    while (power > 0) {
        if ((power & 1) != 0) {
            result *= b;
        }
        power >>= 1;
        b *= b;
    }
    return result;

    // var result = 1;
    //   for (i = 1; i < power; i++) {
    //   result *= i;
    //   }
    // return result;
}

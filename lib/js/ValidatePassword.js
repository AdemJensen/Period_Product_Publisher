function validatePassword(password) {
    if (password === "请设置一个密语吧") {
        return 1;
    }
    if (password.length < 6 || password.length > 20) {
        return 2;
    }
    return 0;
}
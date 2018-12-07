function validatePassword(password) {
    if (password === "请设置一个密语吧") {
        return 1;
    }
    if (password.length < 1 || password.length > 16) {
        return 2;
    }
    return 0;
}
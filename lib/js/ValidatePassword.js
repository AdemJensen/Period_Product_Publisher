function validatePassword(password) {
    if (password === "请设置一个密语吧" || password === "请输入TA的密语") {
        return 1;
    }
    if (password.length < 1 || password.length > 16) {
        return 2;
    }
    return 0;
}
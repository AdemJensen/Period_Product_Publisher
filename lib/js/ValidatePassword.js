function validatePassword(password) {
    if (password === "请设置一个密语吧" || password === "请输入TA的密语" || password === "密语已被使用过了" || password === "密语不符合规范" || password === "出现未知错误") {
        return 1;
    }
    if (password.length < 1 || password.length > 16) {
        return 2;
    }
    return 0;
}
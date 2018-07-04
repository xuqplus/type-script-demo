var $ = $ || {};
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
console.log(1);
var user = new User();
user.name = '许小群';
user.password = '123456';
$('#id').html(user.name + ',' + user.password);
//直接手工新建.ts和.html文件, 并在页面中引用jquery

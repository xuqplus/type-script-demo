var $ = $ || {};

class User {
    name: string;
    password: string;
}

console.log(1);

var user: User = new User();
user.name = '许小群';
user.password = '123456';

$('#id').html(user.name + ',' + user.password);

//直接手工新建.ts和.html文件, 并在页面中引用jquery

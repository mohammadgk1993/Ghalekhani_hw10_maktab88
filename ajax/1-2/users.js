let users = [];
for (let i = 1; i < 3; i++) {
    $.ajax({
        url: `https://reqres.in/api/users?page=${i}`,
        async: false, 
        dataType: 'json',
        success: function (pageData) {
            $.each(pageData.data, function (key, val) {
                users.push(val);
            });            
        }
        });
}
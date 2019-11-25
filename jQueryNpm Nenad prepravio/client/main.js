fetch('http://127.0.0.1:3000/')
    .then(res => res.json())
    .then((posts) => {
        posts.forEach(post => {
            var $div = document.createElement('div');
            var $p = document.createElement('p')

        });
    })
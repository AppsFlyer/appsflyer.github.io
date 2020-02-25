$('#projects')
  .on('mixLoad', function(){
    $('footer')[0].dataset.ready = 'true';
    // loadBlogPosts();
    // loadJobs();
  })
  .on('mixStart mixEnd', function(e) {
    document.body.dataset.mixing = e.type == 'mixStart';
  });

function loadBlogPosts() {
  var url = 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&output=json&callback=?&q='
  var feed_url = 'http://medium.com/feed/appsflyer';

  $.getJSON(url+encodeURIComponent(feed_url)).done(function(data) {
    // up to 3 items
    var items = {'entries': data.responseData.feed.entries.slice(0,3)};

    var source   = $('#blog-template').html();
    var template = Handlebars.compile(source);
    var html = template(items);

    $('#blog').append(html);
  });
}

  $.getJSON(apiUrl).done(function(data) {
    var source   = $('#jobs-template').html();
    var template = Handlebars.compile(source);
    var html = template(data);

    $('#jobs').append(html);
  });
}

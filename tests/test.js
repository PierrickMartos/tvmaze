var test = require('tape');
var TVMaze = require('../');

test('search for shows', function (t) {
  t.plan(3);

  var tvm = new TVMaze();
  tvm.findShow('futurama').then( function(shows) {
    t.ok(shows.length, "has at least one result");
    t.equal(shows[0].show.name, 'Futurama');
    t.equal(shows[0].show.id, 538);
  });

});

test('search for Futurama', function (t) {
  t.plan(3);

  var tvm = new TVMaze();
  tvm.findShow('futurama').then( function(shows) {
    t.ok(shows.length, "has at least one result");
    t.equal(shows[0].show.name, 'Futurama');
    t.equal(shows[0].show.id, 538);
  });

});

test('get Futurama', function (t) {
  t.plan(2);

  var tvm = new TVMaze();
  tvm.getShow(538).then( function(show) {
    t.equal(show.name, 'Futurama');
    t.equal(show.id, 538);
  });

});

test('get episodes for Futurama', function (t) {
  t.plan(3);

  var tvm = new TVMaze();
  tvm.getEpisodes(538).then( function(episodes) {
    t.ok(episodes.length, "has at least one episode");
    t.equal(episodes[0].name, 'Space Pilot 3000');
    t.equal(episodes[0].id, 49288);
  });

});
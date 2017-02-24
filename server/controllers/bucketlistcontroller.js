var BucketList = require('../models/bucketlist.js');

exports.addBucketList = function(req, res, next){
	// For postman use
	// var title = req.body.title
	var title = req.body.title;
	var topic = req.body.topic;
	var url = req.body.url;
	var content = req.body.content;
	var specificUser = req.user;

	var bucketList = new BucketList({
		title: title,
		topic: topic,
		url: url,
		content: content,
		specificUser: specificUser
	});

	bucketList.save(function(err){
		if(err) { return next(err); }
		res.json(bucketList);
	});
}
function requestHandler(req, res){
    User.findById(req.userId, function(err, user){
        if(err){
            return res.send(err);
        }else{
            TextTrackList.findById(user.taskId,function(err,tasks){
                if(err){
                    return res.send(err);
                }else{
                    tasks.complete = true;
                    tasks.save(function(err){
                        if(err){
                            return res.send(err);
                        }else{
                            return res.send('Tasks Completed');
                        }
                    });
                }
            });
        }
    });
}
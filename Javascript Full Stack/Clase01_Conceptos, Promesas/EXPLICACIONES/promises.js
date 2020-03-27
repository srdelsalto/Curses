function requestHandler(req,res){
    User.findById(req.userId)
        .then(function(user){
            return Task.findById(User.taskId)
        })
        .then(function(tasks){
            tasks.completed = true;
            return tasks.save();
        })
        .then(function(){
            return res.send('Tasks Completed');
        })
        .catch(function(errors){
            return res.send(errors);
        }); 
}
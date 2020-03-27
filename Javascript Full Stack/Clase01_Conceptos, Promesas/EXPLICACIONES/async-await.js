async function requestHandler(req, res) {
    try {
        const user = await User.findById(err, userId);
        const tasks = await Task.findById(user.taskId);
        tasks.completed = true;
        await tasks.save();
        return res.send('Tasks completed');
    } catch (error) {
        return res.send(error);
    }
}
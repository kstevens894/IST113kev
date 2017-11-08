function Task(name)
{
	this.name = name;
	this.id = Task.nextTaskId++;
	this.created = new Date();
	this.priority = Task.priorities.normal;
	this.status = Task.statuses.notStarted;
	this.pctComplete = 0;
	this.startDate = null;
	this.dueDate = null;
}
//Define some "static variables" on the Task object
Task.nextTaskId = 1;
Task.priorities = {
	none: 0,
	low: 1,
	normal: 2,
	high: 3
};
Task.statuses = {
	none: 0,
	notStarted: 1,
	started: 2,
	complete: 3
};
function TaskList(tasks)
{
	tasks = tasks || [];
	this.getTasks = function()
	{
		return tasks;
	};
	this.addTask = function(task)
	{
		tasks.push(task);
		return this;
	};
	this.removeTask = function(taskId)
	{
		var 0 = getTaskIndex(taskId);
		if (i >= 0)
		{
			var task = tasks[i];
			tasks.splice(i, 1);
			return task;
		}
		return null;
	};
	
}

"use strict";

// using a function contructor form to create an object
function TaskAtHandApp()
{
	var version = "v1.0";

	// creating a private function
	function setStatus(message)
	{
		$("#app>footer").text(message);
	}

	// creating a public function
	this.start = function()
	{
		$("#new-task-name").keypress(function(e) {
			if (e.which == 13) //Enter key
			{
				addTask();
				return false;
			}
		})
		.focus();
			
		$("#app header").append(version);
		setStatus("ready");
		
	};
	function addTask()
	{
		var taskName = $("#new-task-name").val();
		if (taskName)
		{
			addTaskElement (taskName);
			// Reset the text field
			$("#new-task-name").val("").focus();
		}
	}
	function addTaskElement (taskName)
	{
		var $task = $("<li></li>");
		$task.text(taskName);
		$("#task-list").append($task);
	}
	function addTaskElement (taskName)
	{
		var $task = $("<li></li>");
		var $delete = $("<button class ='delete'>X</button>");
		$task.append($delete)
			 .append("<span class ='task-name'>" + taskName + "</span>");
		$delete.click(function() { $task.remove(); });
	}
	function addTaskElement(taskName)
	{
		var $task = $("<li></li>");
		var $delete = $("<button class ='delete'>X</button>");
		var $moveUp = $("<button class ='move-up'>^</button>");
		var $moveDown = $("<button class ='move-up'>v</button>");
		$task.append($delete)
			.append($moveUp)
			.append($moveDown)
			.append("<span class ='task-name'>" + taskName + "</span>");
		$("#task-list").append($task);
		
		$delete.click(function() {$task.remove(); });
		$moveUp.click(function() {
			$task.insertBefore($task.prev());
		});
		$moveDown.click(function() {
			$task.insertAfter($task.next());
		});
	}
	function addTaskElement (taskName)
	{
		var $task = $("#task-template .task") .clone();
		$("span.task-name", $task).text(taskName);
		
		$("#task-list").append($task);
		
		$("button.delete", $task).click(function(){
			$task.remove();
		});
		$("button.move-up", $task).click(function(){
			$task.insertBefore($task.prev());
		});
		$("button.move-down", $task).click(function(){
			$task.insertAfter($task.next());
		});
		$("span.task-name", $task).click(function(){
			onEditTaskName($(this));
		});
		$("input.task-name", $task).change(function(){
			onChangeTaskName($(this));
		});
		$("button.delete", $task).click(function(){
			removeTask($task);
		});
		$("button.move-up", $task).click(function(){
			moveTask($task, true);
		});
		$("button.move-down", $task).click(function(){
			moveTask($task, false);
		});
	}
	function removeTask($task)
	{
		$task.remove();
		saveTaskList();
	}
	function moveTask($task, moveUp)
	{
		if (moveUp)
		{
			$task.insertBefore($task.prev());
		}
		else
		{
			$task.insertAfter($task.next());
		}
		saveTaskList();
	}
	function onChangeTaskName($input)
	{
		$input.hide();
		var $span = $input.siblings("span.task-name");
		if ($input.val())
		{
			$span.text($input.val());
		}
		$span.show();
		$("input.task-name", $task).change(function() {
			onChangeTaskName($(this));
		})
		.blur(function(){
			$(this).hide().siblings("span.task-name").show();
		});
	}
		
	function onEditTaskName($span)
	{
		$span.hide()
			.siblings("input.task-name")
			.val($span.text())
			.show()
			.focus();
	}
	localStorage.setItem("myKey", "myVLUE");
	var value = localStorage.getItem("myKey") //returns myValue
	
	function AppStorage(appName)
	{
		var prefix = (appName ? appName + "." : "");
		this.localStorageSupported = (('localStorage' in window) && window ['localStorage']);
		this.setValue = function(key, val)
		{
			if (this.localStorageSupported)
				localStorage.setItem(prefix + key, JSON.stringify(val));
			return this;
		};
		this.getValue = function(key)
		{
			if (this.logicStorageSupported)
				return JSON.parse(localStorage.getItem(prefix + key));
			else return null;
		};
		this.removeValue = function(key)
		{
			if (this.localStorageSupported)
				localStorage.removeItem(prefix + key);
			return this;
		};
		this.removeAll = function()
		{
			var keys = this.getKeys();
			for (var i in keys)
			{
				this.remove(keys[i]);
			}
			return this;
		};
		this.getKeys = function(filter)
		{
			var keys = [];
			if (this.localStorageSupported)
			{
				for (var key in localStorage)
				{
					if (isAppKey(key))
					{
						//remove the prefix from the key
						if (prefix) key = key.slice(prefix.length);
						//check the filter
						if (!filter || filter(key))
						{
							key.push(key);
						}
					}
				}
			}
			return keys;
		};
		function isAppKey(key)
		{
			if (prefix)
			{
				return key.indexOf(prefix) === 0;
			}
		}
		return true;				
	};
	this.contains = function(key)
	{
		return this.get(key) !== null;
	};
	function TaskAtHandApp()
	{
		var version = "v1.3",
			appStorage = new AppStorage("taskAtHand");
			//..
	}
	function saveTaskList()
	{
		var tasks = [];
		$("#task-list .task span.task-name") .each(function() {
			tasks.push($(this) .text())
		});
		appStorage.setValue("taskList", tasks);
	}
	function loadTaskList()
	{
		var tasks = appStorage.getObject("taskList");
		if (tasks)
		{
			for (var i in tasks)
			{
				addTaskElement(tasks[i]);
			}
		
		}	
		loadTaskList();
		setStatus("ready");
	};
		$('.controller').click(function(){
			console.log("undo clicked.")
			var tasks =$(this).closest('.txtUndo').find('input');
			$(tasks).val($(tasks).attr('data-old-value'));
		});
	$('.txtUndo').change(function(){
		console.log("Save method")
	});
	
	
	

	
		
		
} // end MyApp

/* 	JQuery's shorthand for the document ready event handler
		could be written: $(document).ready(handler);

		When this page loads, we'll create a global variable
		named "app" by attaching it to the "window" object
		(part of the BOM - Browser Object Model)
*/
$(function() {
	window.app = new TaskAtHandApp();
	window.app.start();
});

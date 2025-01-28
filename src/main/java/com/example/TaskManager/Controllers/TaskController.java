package com.example.TaskManager.Controllers;

import com.example.TaskManager.Models.Task;
import com.example.TaskManager.Service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tasks")
public class TaskController {

    private final TaskService taskService;

    @Autowired
    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    // Get task by ID
    @GetMapping("/{tsk_id}")
    public Task getTask(@PathVariable Integer tsk_id) {
        return taskService.findTaskById(tsk_id);
    }

    // Get all tasks
    @GetMapping
    public List<Task> getAllTasks() {
        return taskService.findTasks();
    }

    // Add a new task
    @PostMapping
    public void addTask(@RequestBody Task task) {
        taskService.save(task);
    }

    // Update an existing task by ID
    @PutMapping("/{tsk_id}")
    public void updateTask(@PathVariable Integer tsk_id, @RequestBody Task task) {
        task.setTsk_id(tsk_id); // Set the task ID from the path variable
        taskService.update(task);
    }

    // Delete a task by ID
    @DeleteMapping("/{tsk_id}")
    public void deleteTask(@PathVariable Integer tsk_id) {
        taskService.delete(tsk_id);
    }
}

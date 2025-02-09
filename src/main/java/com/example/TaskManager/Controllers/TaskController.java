package com.example.TaskManager.Controllers;

import com.example.TaskManager.Models.Task;
import com.example.TaskManager.Models.TaskDetailsDTO;
import com.example.TaskManager.Services.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/task")
public class TaskController {

    private final TaskService taskService;

    @Autowired
    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    // Get basic tasks
//    @GetMapping
//    public List<Task> getAllBasicTasks() {
//        return taskService.findBasicTasks();
//    }

    // Get detailed tasks with employee and category info
    @GetMapping
    public ResponseEntity<Map<String, Object>> getAllDetailedTasks(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(required = false) String search) {

        int offset = page * size;
        List<TaskDetailsDTO> tasks = taskService.findDetailedTasks(search, offset, size);  // Pass 'search' as well
        int total = taskService.countAllTasks(search);  // Count tasks with the search filter

        Map<String, Object> response = new HashMap<>();
        response.put("tasks", tasks);
        response.put("total", total);

        return ResponseEntity.ok(response);
    }

    // Get task by ID
    @GetMapping("/{tsk_id}")
    public Task getTask(@PathVariable Integer tsk_id) {
        return taskService.findTaskById(tsk_id);
    }
    // Update an existing task by ID
    @PutMapping("/{tsk_id}")
    public void updateTask(@PathVariable Long tsk_id, @RequestBody Task task) {
        task.setTsk_id(tsk_id);
        taskService.update(task);
    }

    // Delete a task by ID
    @DeleteMapping("/{tsk_id}")
    public void deleteTask(@PathVariable Integer tsk_id) {
        taskService.delete(tsk_id);
    }
}
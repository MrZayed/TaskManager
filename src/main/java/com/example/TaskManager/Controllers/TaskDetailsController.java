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

@CrossOrigin(origins = "http://localhost:1841")  // Allow CORS globally
@RestController
@RequestMapping("/task-details")
public class TaskDetailsController {

    private final TaskService taskService;

    @Autowired
    public TaskDetailsController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping
    public ResponseEntity<Map<String, Object>> getAllDetailedTasks(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "4") int size,
            @RequestParam(required = false) String search,
            @RequestParam(required = false) Integer start,
            @RequestParam(required = false) Integer limit) {

        int offset = (start != null) ? start : page * size;
        int pageSize = (limit != null) ? limit : size;

        try {
            List<TaskDetailsDTO> tasks = taskService.findDetailedTasks(search, offset, pageSize);
            int total = taskService.countAllTasks(search);

            Map<String, Object> response = new HashMap<>();
            response.put("tasks", tasks);
            response.put("total", total);

            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("error", "Server error: " + e.getMessage()));
        }
    }



    // ✅ Create new task
    @PostMapping
    public ResponseEntity<String> createTaskWithDetails(@RequestBody TaskDetailsDTO taskDetailsDTO) {
        try {
            taskService.save(convertToTaskEntity(taskDetailsDTO));
            return ResponseEntity.status(HttpStatus.CREATED).body("Task created successfully!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error creating task: " + e.getMessage());
        }
    }

    // ✅ Update existing task (Fix for PUT request)
    @PutMapping("/{tsk_id}")
    public ResponseEntity<String> updateTaskWithDetails(@PathVariable("tsk_id") Long tsk_id,
                                                        @RequestBody TaskDetailsDTO taskDetailsDTO) {
        try {
            Task task = convertToTaskEntity(taskDetailsDTO);
            task.setTsk_id(tsk_id);  // Use path variable for task ID

            taskService.update(task);
            return ResponseEntity.ok("Task updated successfully!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error updating task: " + e.getMessage());
        }
    }

    // ✅ Delete task
    @DeleteMapping("/{tsk_id}")
    public ResponseEntity<String> deleteTaskWithDetails(@PathVariable Integer tsk_id) {
        try {
            taskService.delete(tsk_id);
            return ResponseEntity.ok("Task deleted successfully!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error deleting task: " + e.getMessage());
        }
    }

    // 🔄 DTO to Entity conversion
    private Task convertToTaskEntity(TaskDetailsDTO dto) {
        Task task = new Task();
        task.setTsk_name(dto.getTsk_name());
        task.setDescription(dto.getDescription());
        task.setStart_date(dto.getStart_date());
        task.setEnd_date(dto.getEnd_date());
        task.setDue_date(dto.getDue_date());
        task.setEmployee_id(dto.getEmp_id());
        task.setTask_category(dto.getCat_id());
        return task;
    }
}

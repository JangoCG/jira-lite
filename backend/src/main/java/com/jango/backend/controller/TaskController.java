package com.jango.backend.controller;

import com.jango.backend.model.dto.CreateTaskDto;
import com.jango.backend.model.entity.Task;
import com.jango.backend.service.TaskService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/task")
@AllArgsConstructor
@CrossOrigin
public class TaskController {

    private final TaskService taskService;

    @GetMapping
    public List<Task> getAllTasks() {
        return taskService.getAllTasks();
    }

    @PostMapping
    public Task createTask(@RequestBody CreateTaskDto createTaskDto) {
        return taskService.createTask(createTaskDto);
    }

//    @GetMapping("/test")
//    public String test() {
//        //        ResponseEntity<String> response = new ResponseEntity<>("Hello World", HttpStatus.BAD_REQUEST);
//        System.out.println("get mapping called");
//        return "hi from test";
////        return postService.getPost(id);
//    }

//    /**
//     * Create a single post.
//     *
//     * @param post The post to be created.
//     * @return created {@link Post}
//     */
//    @PostMapping
//    public Post createPost(@RequestBody Post post) {
//        System.out.println(post.getDescription());
//        System.out.println(post.getTitle());
//        return postService.createPost(post.getTitle(), post.getDescription());
//   Eva coded jetzt auch. Kuss. Mau. }
}

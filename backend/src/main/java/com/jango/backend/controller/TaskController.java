package com.jango.backend.controller;

import com.jango.backend.model.dto.CreateTaskDto;

import com.jango.backend.model.entity.Task;
import com.jango.backend.repository.TaskRepository;
import com.jango.backend.service.TaskService;
import lombok.AllArgsConstructor;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/v1/task")
@AllArgsConstructor
public class TaskController {

    private final TaskService taskService;

    @GetMapping
    public List<Task> getAllTasks() {
        List<Task> taskList = new ArrayList<>();
        Task task1 = Task.builder().id(1).content("dummy content").title("Kleine küssen").build();
        Task task2 = Task.builder().id(2).content("dummy content").title("Joggen ehen").build();
        Task task3 = Task.builder().id(3).content("dummy content").title("Einkaufen").build();
        Task task4 = Task.builder().id(4).content("dummy content").title("Nest JS lernen").build();


        taskList.add(task1);
        taskList.add(task2);
        taskList.add(task3);
        taskList.add(task4);
        return taskList;
    }



    @PostMapping
    public Task createTask(@RequestBody CreateTaskDto createTaskDto) {
        System.out.println(createTaskDto.getDesc());
        System.out.println(createTaskDto.getTitle());

        Task task = Task.builder().title(createTaskDto.getTitle()).build();

        taskService.saveTask(task);

        return task;
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
//    }
}

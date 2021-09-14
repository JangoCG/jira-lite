package com.jango.backend.Task;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/add")
@AllArgsConstructor
public class TaskController {


    @GetMapping
    public String add() {
        return "Hello";
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

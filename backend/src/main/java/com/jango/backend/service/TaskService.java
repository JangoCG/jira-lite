package com.jango.backend.service;

import com.jango.backend.model.entity.Task;
import com.jango.backend.repository.TaskRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class TaskService {

    private final TaskRepository taskRepository;

    public String saveTask(Task task) {
        taskRepository.save(task);
        return "test";
    }
}

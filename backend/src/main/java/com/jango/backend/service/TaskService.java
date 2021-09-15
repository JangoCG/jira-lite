package com.jango.backend.service;

import com.jango.backend.model.dto.CreateTaskDto;
import com.jango.backend.model.entity.Task;
import com.jango.backend.repository.TaskRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class TaskService {

    private final TaskRepository taskRepository;

    public Task createTask(CreateTaskDto createTaskDto) {
        Task taskToSave = Task
                .builder()
                .title(createTaskDto.getTitle())
                .content(createTaskDto.getContent()).build();

        return taskRepository.save(taskToSave);
    }

    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }
}

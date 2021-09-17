package com.jango.backend;

import com.jango.backend.model.entity.Task;
import com.jango.backend.repository.TaskRepository;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import javax.transaction.Transactional;
import java.sql.SQLOutput;

@Component
@RequiredArgsConstructor
public class DataInitializer {

    private final TaskRepository taskRepository;

    @Value("${datainitializer.enabled}")
    private boolean enabled;

    /**
     * An event listener to initialize data on start of the application.
     *
     * @param event the application ready event which gets fired by spring.
     */
    @EventListener
    public void onApplicationEvent(ApplicationReadyEvent event) {
        if (enabled) {
            System.out.println("app is ready");
            System.out.println(enabled);
            initializeTasks();
        }
    }


    private void initializeTasks() {
        System.out.println("Initializing Task database with mock Data");

        String content = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor " +
                "invidunt ut labore et dolore magna aliquyam erat.";

        Task task1 = Task
                .builder()
                .title("Feature-0001: Setup Postgres database")
                .content(content)
                .build();

        Task task2 = Task
                .builder()
                .title("Feature-0002: User Registration ")
                .content(content)
                .build();

        Task task3 = Task
                .builder()
                .title("Feature-0003: New endpoints for tasks")
                .content(content)
                .build();

        Task task4 = Task
                .builder()
                .title("Feature-0004: Design the task overview board")
                .content(content)
                .build();

        taskRepository.save(task1);
        taskRepository.save(task2);
        taskRepository.save(task3);
        taskRepository.save(task4);
    }
}

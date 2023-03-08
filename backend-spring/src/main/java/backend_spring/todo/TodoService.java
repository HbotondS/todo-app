package backend_spring.todo;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoService {
    private final TodoRepository repository;

    public TodoService(TodoRepository repository) {
        this.repository = repository;
    }

    public List<Todo> getAllTodos() {
        return this.repository.findAll();
    }

    public boolean deleteTodo(Integer id) {
        boolean isFound = this.repository.existsById(id);
        if (isFound) {
            this.repository.deleteById(id);
        }

        return isFound;
    }
}

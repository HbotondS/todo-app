package backend_spring.todo;

import org.bson.types.ObjectId;
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

    public boolean deleteTodo(String id) {
        boolean isFound = this.repository.existsById(id);
        if (isFound) {
            this.repository.deleteById(id);
        }

        return isFound;
    }

    public Todo addTodo(String name) {
        Todo todo = new Todo();
        todo.setId(ObjectId.get());
        todo.setName(name);

        return this.repository.save(todo);
    }
}

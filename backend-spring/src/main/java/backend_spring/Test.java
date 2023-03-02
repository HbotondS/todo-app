package backend_spring;

import backend_spring.todo.Todo;
import backend_spring.todo.TodoService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/spring/")
public class Test {
    private final TodoService service;

    public Test(TodoService service) {
        this.service = service;
    }

    @GetMapping(path = "test")
    public List<Todo> test() {
        return this.service.getAllTodos();
    }
}

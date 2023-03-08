package backend_spring.todo.resolver;

import backend_spring.todo.Todo;
import backend_spring.todo.TodoService;
import graphql.kickstart.tools.GraphQLQueryResolver;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.List;

@Slf4j
@Component
public class TodoQuery implements GraphQLQueryResolver {

    private final TodoService service;

    public TodoQuery(TodoService service) {
        this.service = service;
    }

    public List<Todo> getTodos() {
        return this.service.getAllTodos();
    }
}

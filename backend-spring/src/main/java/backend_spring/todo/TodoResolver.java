package backend_spring.todo;

import graphql.kickstart.tools.GraphQLQueryResolver;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.List;

@Slf4j
@Component
public class TodoResolver implements GraphQLQueryResolver {

    private final TodoService service;

    public TodoResolver(TodoService service) {
        this.service = service;
    }

    public List<Todo> getTodos() {
        return this.service.getAllTodos();
    }
}

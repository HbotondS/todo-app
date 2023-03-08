package backend_spring.todo.resolver;

import backend_spring.todo.TodoService;
import graphql.kickstart.tools.GraphQLMutationResolver;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class TodoMutation implements GraphQLMutationResolver {

    private final TodoService service;

    public TodoMutation(TodoService service) {
        this.service = service;
    }

    public boolean deleteTodo(Integer id) {
        return this.service.deleteTodo(id);
    }
}

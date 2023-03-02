package backend_spring.todo;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Todos")
@Getter
@Setter
public class Todo {
    @Id
    private String Id;
    private String name;
}
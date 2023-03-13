package backend_spring.todo;

import lombok.Getter;
import lombok.Setter;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Todos")
@Getter
@Setter
public class Todo {
    @Id
    private ObjectId id;
    private String name;
}
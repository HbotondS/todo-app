package backend_spring.todo;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface TodoRepository extends MongoRepository<Todo, String> {
    Optional<Todo> findByName(String name);

    Optional<Todo> findById(String id);
}

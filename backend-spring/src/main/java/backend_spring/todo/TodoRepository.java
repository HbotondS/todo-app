package backend_spring.todo;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface TodoRepository extends MongoRepository<Todo, Integer> {
    Optional<Todo> findByName(String name);

    Optional<Todo> findById(Integer id);
}

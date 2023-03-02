package backend_spring;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/spring/test")
public class Test {

    @GetMapping
    public String test() {
        return "hello world";
    }
}

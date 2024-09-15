import java.nio.file.Paths
Files.list(Path.get(".")).forEach(Sout::)//root

Files.walk(Path.get("."), 1).forEach(Sout::)//root

String.valueOf(path)

//Predicate<? super Path> predicate = path -> String.valueOf(path).contains(".java");
//Files.walk(currentDirectory, 4).filter(predicate).forEach(System.out::println);
BiPredicate<Path, BasicFileAttributes> matcher =
(path, attributes) -> String.valueOf(path).contains(".java");
Files.find(currentDirectory, 4, matcher);

Path pathFileToRead = Paths.get("./resources/data.txt");
List<String> lines = Files.readAllLines(pathFileToRead);
System.out.println(lines);

Alternative:
Files.lines(pathFileToRead)
.map(String::toLowerCase)
.forEach(System.out::println);

Write to a file:
Path pathFileToWrite = Paths.get("./resources/file-write.txt");
List<String> list = List.of("Apple", "Boy", "Cat", "Dog", "Elephant");
Files.write(pathFileToWrite, list);
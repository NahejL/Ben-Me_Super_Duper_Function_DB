# Ben-Me_Super_Duper_Function_DB
DB/App for "Executables" 
```c#
class Executable <P, U, E> where P extends Producable, U extends Usable, E extends Executable{
  P result;
  Set<U> requirements;
  List<E> steps;
}

class Producable<E> where E extends Executable{
  Set<E> producers;
}

class Usable<E> where E extends Executable{
  Set<E> users;
}
```

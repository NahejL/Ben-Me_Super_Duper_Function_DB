# Ben-Me_Super_Duper_Function_DB
DB/App for "Executables" 
```c#
class Executable<P, U, E> where P: Producable, U: Usable, E: Executable{
  P result;
  Set<U> requirements;
  List<E> steps;
}

class Producable<E> where E: Executable{
  Set<E> producers;
}

class Usable<E> where E: Executable{
  Set<E> users;
}
```

```c#
class Computable<P, U, E>: Executable<P, U, V>{

  delegate P call(Set<U>);

}
```

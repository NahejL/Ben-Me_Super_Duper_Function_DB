# Things we agree upon

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
class Computable: Executable<Instance, Instance, Computable>{

  call() =>
    for(step in steps)
      result = step.call({
        ...requirements,
        result
      })

}

class Instance: Producable, Usable{}
```

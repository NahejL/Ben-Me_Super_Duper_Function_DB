# Ben-Me_Super_Duper_Function_DB
DB/App/Dictionary for/of Executables/Protocoles/DIYs 
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

  Instance call(Set<Instance> params){
    
    Instance cache = null;
    
    for(step in steps)
      cache = step.call({
        ...requirements,
        cache
      })
    
    return cache;
    
  }

}

class Instance: Producable, Usable{}
```

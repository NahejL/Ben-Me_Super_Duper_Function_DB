# Things we agree upon

```c#
class Result<V>: Producable{
   V value;
   Set<Usable> used;
}

class Producable<T>{
  set value(T);
}

class Usable<T>{
  T get value;
}

class Executable<Result, Params as [Param]> where Param:> Usable, Result:> Producable {
   Result call(Params);
}
```

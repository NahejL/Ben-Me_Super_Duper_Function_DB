# app -to> user API.
What can we do with the app ?
```c#
class App {
  
private or protected:

  Struct AppInfo {
    String name;
    String url;
    Float version;
    // ...
  
    initializeApp(AppInfo);
  } appInfo

  ParameterBlock {
  List< Type Extending Executable > instructions; // This can be a known and extendable instruction list
  List< View > views;        // Different UI components faced by user
    or
  HashMap< List< Type Extending Executable >, View >;
  }
  
  createExecutable(
    Type Extending Producable result, 
    Set< Type Extending Usable > requirements, 
    List< Type Extending Executable > steps
  );
  
public:
//================================
// Instruction Related
//================================
  addInstruction(
    Type Extending Executable step
  ) {
    this -> instructions.add(step);
  };
  
  createInstruction(
    // Some translatable params
  ) {
    // Translate some file or string type to a step
  };
  
  deleteInstruction(
    Integer step#    or
    String  stepName or
    Type Extending Executable step
  );
  
//================================
// Access Related
//================================
  Boolean verifyLegalAccess(
             App Pointer nextApp,
             App Pointer currentApp,
             UserID      userId
          );
  
  // Returns next App under some conditions or after some executions
  App Pointer accessNextApp(
                 App Pointer nextApp
              );
  
  modifyAppAccess(
    UserID userId
  );
}
```
# user -to> app API.
What are we expecting from the user ?
```c#
class User {   
public:
  Struct UserID {
     String id;
     String loginCredentials;
     String accessLevel;
     String deviceType; // mobile, PC, other
     String accessType; // mobile app, web app, other
     // ...
      
     initializeUser(
        UserID
     );
   } userId;
   
   getApp();
   
   modifyAppParams(
      Type Extending Producable result, 
      Set< Type Extending Usable > requirements, 
      List< Type Extending Executable > steps
   );
   
   accessView(
      App Pointer nextApp,
   ) {
     if (verifyLegalAccess(nextApp, this->CurrentApp, UserID userId)) then
        this->CurrentApp = accessNextApp(nextApp);
   }
         
private or protected:
   App Pointer CurrentApp;  // General pointer to keep track of currently used app
   
   adjustAppToAccess(
      UserID,
      List< Type Extending Executable > extraSteps = NULL
   );   
}
```

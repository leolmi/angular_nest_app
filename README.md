# Angular Nest Mongo - SPA application

template step di installazione 
NX.js


- creazione app 
````
npx create-nx-workspace --preset=angular
````

- installazione plugin nest
````
npm install -D @nrwl/nest
````

- creazione app nest
````
nx generate @nrwl/nest:application {nome-applicazione}
````

- plugin per la definizione dei path statici
````
npm i @nestjs/serve-static
````

- installazione gulp
````
npm i -D gulp
````

- Mongoose
````
npm i mongoose @nestjs/mongoose
````

- Angular material
````
ng add @angular/material
````

- Flex layout
````
npm i @angular/flex-layout
````

- NGRX
````
ng add @ngrx/store@latest
````

- lodash
````
npm i lodash
````

- File saver
````
npm i file-saver
````

- File zip
````
npm i jszip
````



- Nest app
````
  // main.ts
  
  async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const globalPrefix = 'api';
    app.setGlobalPrefix(globalPrefix);
    app.use(json({ limit: '10mb' }));
    app.use(urlencoded({ extended: true, limit: '10mb' }));
    const port = process.env.PORT || 3333;
    const message = environment.production ? `Server started` : `Listening at http://localhost:${port}/${globalPrefix}`;
    await app.listen(port, () => Logger.log(message));
  }
  bootstrap();



  // app.module.ts 

  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'public')
    }),
  ],
````


- Gulp per il deploy


- Procfile per heroku
````
  web: npm start
````

- update package.json

# How to draw bezier paths (UNFINISHED)


## Model

First of all creates `Point` class. Its help manipulate 2d vectors. Point have two attributes — `x` and `y` — both `number` type. 


```typescript
export default class Point {
  x: number;
  y: number;
  constructor(x: number = 0, y: number = 0){
    this.x = x;
    this.y = y;
  }
  add(point:Point){
    ...
  }
  ...
}
```

## Available Scripts

### npm start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### npm run build

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

**For the best production performance:** Add a build bundler plugin like [@snowpack/plugin-webpack](https://github.com/snowpackjs/snowpack/tree/main/plugins/plugin-webpack) or [snowpack-plugin-rollup-bundle](https://github.com/ParamagicDev/snowpack-plugin-rollup-bundle) to your `snowpack.config.mjs` config file.

### Q: What about Eject?

No eject needed! Snowpack guarantees zero lock-in, and CSA strives for the same.


> ✨ Bootstrapped with Create Snowpack App (CSA).
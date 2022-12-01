import ts from "gulp-typescript";
import gulp from "gulp";
const { dest, src } = gulp;

const tsProject = ts.createProject("./tsconfig.json");

const compileTs = () => {
  return src("./src/**/*.ts")
    .pipe(tsProject())
    .pipe(dest("./build"));
};

const defaultTask = compileTs;

export default defaultTask;

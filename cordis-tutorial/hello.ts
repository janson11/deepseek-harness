import { Context, Service } from "@deepseek-ai/cordis";

export const name = "hello";

// 1. Function plugin (what you just wrote).
export function apply(ctx: Context) {
  console.log("hello from my EDIDED plugin");
  // throw new Error("apply exploaded")
}

// 2. Object plugin: an object with an `apply` method.
export const objectPlugin = {
  name: "object-plugin",
  apply(ctx: Context) {},
};

// 3. Class plugin: a Service subclass (covered in chapter 3).
export class MyService extends Service {
  constructor(ctx: Context) {
    super(ctx, "myTutorialService");
  }
}

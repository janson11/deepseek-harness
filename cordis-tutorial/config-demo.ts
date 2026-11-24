import type { Context } from "@deepseek-ai/cordis";
import type {} from "@deepseek-ai/cordis-plugin-loader";
import Schema from "@deepseek-ai/schemastery";

export const name = "config-demo";

export const Config = Schema.object({
  greeting: Schema.string().default("Hello").volatile(),
});

export function apply(ctx: Context, config: ReturnType<typeof Config>) {
  console.log(config.greeting.get());
  ctx.on("loader/volatile-update", () => {
    console.log(config.greeting.get());
  });
}

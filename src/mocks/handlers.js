import { rest } from "msw";
import { fakeMessages } from "../test-utils/const";
export const handlers = [
  rest.get("https://api.pushshift.io/reddit/search/", (req, res, ctx) => {
    return res(ctx.json(fakeMessages));
  }),
];

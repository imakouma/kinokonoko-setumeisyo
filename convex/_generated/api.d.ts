/* eslint-disable */
/**
 * Generated `api` utility.
 */
import type { ApiFromModules, FilterApi, FunctionReference } from "convex/server";
import type * as init from "../init.js";
import type * as manual from "../manual.js";

declare const fullApi: ApiFromModules<{
  init: typeof init;
  manual: typeof manual;
}>;

export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;

export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;

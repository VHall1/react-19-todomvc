import { remember } from "@epic-web/remember";
import { PrismaClient } from "@prisma/client";
import "server-only";

export const db = remember("db", () => new PrismaClient());

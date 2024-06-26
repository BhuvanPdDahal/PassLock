import { z } from "zod";

export const CreateItemValidator = z.object({
    siteName: z.string().min(1, {
        message: "Site name is required"
    }),
    siteLink: z.string().url({
        message: "Invalid URL"
    }),
    email: z.string().email({
        message: "Email is invalid"
    }),
    password: z.string().min(1, {
        message: "Password is required"
    }),
    favorited: z.boolean()
});

export const EditItemValidator = z.object({
    id: z.string(),
    siteName: z.string().min(1, {
        message: "Site name is required"
    }),
    siteLink: z.string().url({
        message: "Invalid URL"
    }),
    email: z.string().email({
        message: "Email is invalid"
    }),
    password: z.string().min(1, {
        message: "Password is required"
    }),
    favorited: z.boolean()
});

export const DeleteItemValidator = z.object({
    id: z.string()
});

export const GetUserItemsValidator = z.object({
    page: z.number(),
    limit: z.number()
});

export const GetUserNotificationValidator = z.object({
    page: z.number(),
    limit: z.number()
});

export const GetUserSearchItemsValidator = z.object({
    query: z.string(),
    page: z.number(),
    limit: z.number()
});

export type CreateItemPayload = z.infer<typeof CreateItemValidator>;
export type EditItemPayload = z.infer<typeof EditItemValidator>;
export type DeleteItemPayload = z.infer<typeof DeleteItemValidator>;
export type GetUserItemsPayload = z.infer<typeof GetUserItemsValidator>;
export type GetUserNotificationPayload = z.infer<typeof GetUserNotificationValidator>;
export type GetUserSearchItemsPayload = z.infer<typeof GetUserSearchItemsValidator>;
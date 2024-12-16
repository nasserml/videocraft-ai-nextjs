import { GenerateAIVideoData_AiModel } from "@/configs/AiModel";
import { inngest } from "./client";
import { db } from "@/configs/db";
import { VIDEO_RAW_TABLE } from "@/configs/schema";
import { eq } from "drizzle-orm";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello ${event.data.email}!` };
  }
);

export const GenerateAIVideoData = inngest.createFunction(
  { id: "generate-ai-video-data" },
  { event: "ai/generate-video-data" },
  async ({ event, step }) => {
    const { prompt, videoId } = event.data;

    // Generate AI content
    const generateVideoData = await step.run(
      "Generate Ai Video Data",
      async () => {
        const result = await GenerateAIVideoData_AiModel.sendMessage(prompt);
        return JSON.parse(result.response.text());
      }
    );

    // Update or Record using videoId

    const updateRecord = await step.run(
      "Update Record Using Video Id",
      async () => {
        const result = await db
          .update(VIDEO_RAW_TABLE)
          .set({
            videoData: generateVideoData,
            status: "active",
          })
          .where(eq(VIDEO_RAW_TABLE.videoId, videoId))
          .returning(VIDEO_RAW_TABLE);

        return result;
      }
    );

    return updateRecord;
  }
);

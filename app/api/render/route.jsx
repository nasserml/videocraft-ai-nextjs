import { renderMedia } from "@remotion/renderer";
import { getCompositions } from "@remotion/renderer";
import { bundle } from "@remotion/bundler";
import path from "path";
import { NextResponse } from "next/server";
import { db } from "@/configs/db";
import { VIDEO_RAW_TABLE } from "@/configs/schema";
import { eq } from "drizzle-orm";

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const compositionId = "RemotionComposition";

export async function POST(req) {
  console.log("Rendering video with id", req.body.videoId);

  const { videoId } = await req.json();

  // Fetch video data from the database
  const videoDataResult = await db
    .select()
    .from(VIDEO_RAW_TABLE)
    .where(eq(VIDEO_RAW_TABLE.videoId, videoId));

  console.log("Video data result", videoDataResult);

  if (videoDataResult.length === 0) {
    return NextResponse.json(
      { error: "Video not found" },
      {
        status: 404,
      }
    );
  }

  const videoData = videoDataResult[0].videoData;

  console.log("Video data", videoData);

  // Bundle the project
  const entry = path.join(__dirname, "../../../app/editor/_components/RemotionComposition.jsx");
  const bundleLocation = await bundle(path.resolve(entry), {
    webpackOverride: (config) => {
      config.resolve.fallback = {
        fs: false,
        tls: false,
        net: false,
        perf_hooks: false,
        zlib: false,
        crypto: false,
        path: false,
      };
      return config;
    },
  });

  console.log("Bundle location", bundleLocation);

  // Get the compositions
  const comps = await getCompositions(bundleLocation, {
    inputProps: {
      frameList: videoData.frameList,
    },
  });

  console.log("Compositions", comps);

  // Ensure you have at least one composition
  if (comps.length === 0) {
    return NextResponse.json(
      { error: "No compositions found" },
      {
        status: 500,
      }
    );
  }

  // Select the composition
  const composition = comps.find((c) => c.id === compositionId);

  if (!composition) {
    return NextResponse.json(
      { error: `Composition with ID ${compositionId} not found` },
      {
        status: 500,
      }
    );
  }

  console.log("Composition", composition);

  // Render options
  const outputLocation = `out/${videoId}.mp4`;

  const output = await renderMedia({
    composition,
    serveUrl: bundleLocation,
    codec: "h264",
    outputLocation,
    inputProps: {
      frameList: videoData.frameList,
    },
  });

  console.log("Output", output);

  return NextResponse.json({ output });
}

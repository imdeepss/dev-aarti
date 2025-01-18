import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId:
    process.env.SANITY_STUDIO_PROJECT_ID ??
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ??
    "",
  dataset:
    process.env.SANITY_STUDIO_DATASET ??
    process.env.NEXT_PUBLIC_SANITY_DATASET ??
    "",
  apiVersion: "2023-07-16",
  useCdn: false,
};

const client = createClient(config);

export default client;

import { defineConfig, defineSchema } from "tinacms";

const schema = defineSchema({
  collections: [
    {
      label: "Page Content",
      name: "page",
      path: "content/page",
      format: "mdx",
      fields: [
        {
          type: "string",
          label: "Nav title 1",
          name: "navTitle1",
        },
        {
          type: "string",
          label: "Nav title 2",
          name: "navTitle2",
        },
        {
          type: "string",
          label: "Nav title 3",
          name: "navTitle3",
        },
        {
          type :"string",
          label:"Title",
          name:"title",
        },
        {
          type:"image",
          label: "Image 1",
          name:"image1",
        },
        {
          type:"image",
          label: "Image 2",
          name:"image2",
        },
        {
          type:"image",
          label: "Image 3",
          name:"image3",
        },
        {
          type:"image",
          label: "Image 4",
          name:"image4",
        },
        {
          name: "body",
          label: "Main Content",
          type: "rich-text",
          isBody: true,
        },
        {
          type:"string",
          label:"Footer",
          name:"footer"
        }
      ],
      ui: {
        router: ({ document }) => {
          if (document._sys.filename === "home") {
            return `/`;
          }
          return undefined;
        },
      },
    },
  ],
});

export const config = defineConfig({
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  branch:
    process.env.NEXT_PUBLIC_TINA_BRANCH || // custom branch env override
    process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF || // Vercel branch env
    process.env.HEAD, // Netlify branch env
  token: process.env.TINA_TOKEN,
  media: {
    // If you wanted cloudinary do this
    // loadCustomStore: async () => {
    //   const pack = await import("next-tinacms-cloudinary");
    //   return pack.TinaCloudCloudinaryMediaStore;
    // },
    // this is the config for the tina cloud media store
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads",
    },
  },
  build: {
    publicFolder: "public", // The public asset folder for your framework
    outputFolder: "admin", // within the public folder
  },
  schema,
});

export default config;

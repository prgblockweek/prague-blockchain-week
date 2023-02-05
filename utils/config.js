import { config as dotenv } from "https://deno.land/x/dotenv/mod.ts";

export const config = {
    colMapper: {
        places: "place",
        events: "event",
        "media-partners": "media-partner",
        benefits: "benefit",
        unions: "union",
        chains: "chain",
        "other-events": "event",
    },
    searchHost: "https://ms-6adb282327d4-1786.fra.meilisearch.io/",
    env: dotenv()
}
import { MeiliSearch } from 'npm:meilisearch';
import data from '../dist/23/index.json' assert { type: "json" };
import { config } from "./config.js";

const client = new MeiliSearch({ host: config.searchHost, apiKey: config.env.SEARCH_API_KEY })

function addItem (col, arr, x) {
    arr.push({
        id: `${col}__${x.id}`,
        ident: `${col}__${x.id}`,
        name: x.name,
        description: x.description || x.desc,
        img: x.logo || x.photoUrl || x.photo,
        data: x
    })
    return arr
}

const arr = []
for (const col in config.colMapper) {
    console.log(`${col} ..`)
    for (const x of data[col]) {
        addItem(col, arr, x)
        
        if (x.speakers) {
            for (const speaker of x.speakers) {
                addItem("speakers", arr, speaker)
            }
        }
    }
}
console.log(arr)
await client.index("pbw23").deleteAllDocuments()
await client.index("pbw23").addDocuments(arr)
console.log('Done!')
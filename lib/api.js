const PHOTO_SCHEMA = `
title,
price,
date
image {
  url
}
`;

async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json())
}


function extractPostEntries(fetchResponse) {
  return fetchResponse?.data?.photoCollection?.items || [] 
}

export async function getAllPhotos(preview) {
  const entries = await fetchGraphQL(
    `query {
      photoCollection{
        items {
          ${PHOTO_SCHEMA}
        }
      }
    }`,
    preview
  )
  return extractPostEntries(entries)
}



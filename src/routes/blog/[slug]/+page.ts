import { error, type LoadEvent } from '@sveltejs/kit'

export async function load({ params }: LoadEvent) {
  try {
    const post = await import(`../../../posts/${params.slug}.md`)
    return {
      content: post.default,
      meta: post.metadata
    }
  } catch (e) {
    error(404, `Could not find ${params.slug}`)
  }
}

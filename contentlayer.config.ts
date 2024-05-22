import { defineDocumentType, makeSource } from "contentlayer/source-files"

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: '**/*.md',
  fields: {
    slug: {
      type: 'string',
    },
    title: {
      type: 'string',
      required: true
    },
    date: {
      type: 'date',
      required: true
    },
    description: {
      type: 'string',
      required: true
    },
    main_picture: {
      type: 'string',
      required: true
    },
    side_picture: {
      type: 'string',
    },
  },
  computedFields: {
    slug: { type: 'string', resolve: (post) => `/posts/${post._raw.flattenedPath}` },
  },
}))

export default makeSource({ contentDirPath: 'src/posts', documentTypes: [Post] })

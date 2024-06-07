import { defineDocumentType, makeSource } from 'contentlayer2/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: '**/*.md',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'date',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (post) => `/posts/${post._raw.flattenedPath}`,
    },
    mainPicture: {
      type: 'string',
      resolve: (post) => `/posts/${post._raw.flattenedPath}/main.jpg`,
    },
    sidePicture: {
      type: 'string',
      resolve: (post) => `/posts/${post._raw.flattenedPath}/side.jpg`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'src/posts',
  documentTypes: [Post],
})

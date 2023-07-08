import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

type PostData = {
  title: string;
  date: string;
  thumbnail: string;
};

const postsDirectory = path.join(process.cwd(), 'posts');

export const getSortedPostsData = () => {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);
    const metaData = matterResult.data as PostData;

    return {
      id,
      ...metaData,
    };
  });

  return allPostsData;
};

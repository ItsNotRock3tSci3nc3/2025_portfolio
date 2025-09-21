export const baseUrl = 'https://portfolio-blog-starter.vercel.app'

export const dynamic = "force-static";
export const revalidate = 60; // seconds


export default async function sitemap() {
  // Only include static routes now
  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date().toISOString().split('T')[0],
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date().toISOString().split('T')[0],
    },
    // Add more static routes if needed
  ];
}
